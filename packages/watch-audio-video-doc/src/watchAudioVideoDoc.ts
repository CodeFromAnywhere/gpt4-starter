import { ProjectWatcher, StandardFunctionConfig } from "function-types";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { compressConvert } from "ffmpeg-util";
import { docToMd, docxToMd } from "doc-to-md";
import { convertPdfToMd } from "pdf-to-md";
import { temporaryConvertedSubextension } from "filename-conventions";
import {
  audioFileExtensions,
  docFileExtensions,
  imageFileExtensions,
  readonlyDocFileExtensions,
  videoFileExtensions,
} from "./extensions";
import { isLocked } from "lock-util";
import { isAllTrue } from "js-util";

/**

Watch all video file formats except mp4, and convert them all into a compressed .mp4 (10fps 480p) (remove original)

Find all audiofile formats in project except mp3 and wav, convert into 16 bit wav (remove original)

Find all image file formats in the project except png, convert to png, compress size if it seems to be able to be done without much loss.

Watch all doc formats (docx, rtf, pdf, what else?) and convert them into .md (keeping original)

*/

export const watchAudioVideoDoc: ProjectWatcher = async (
  eventName,
  absolutePath,
  isStartup
): Promise<{ isSuccessful: boolean; message?: string }> => {
  if (!fs.existsSync(absolutePath)) {
    return { isSuccessful: false, message: "File doesn't exist (anymore)" };
  }

  if (isLocked(absolutePath)) {
    return { isSuccessful: false, message: "Locked" };
  }

  if (absolutePath.endsWith(".doc")) {
    return docToMd(absolutePath, true);
  }

  if (absolutePath.endsWith(".docx")) {
    return docxToMd(absolutePath, true);
  }

  if (absolutePath.endsWith(".pdf")) {
    const pathParse = path.parse(absolutePath);

    const mdPathToBe = path.join(pathParse.dir, `${pathParse.name}.md`);
    if (fs.existsSync(mdPathToBe)) {
      return {
        isSuccessful: false,
        message: "Markdown already exists, not overwriting from pdf (for now)",
      };
    }
    if (!absolutePath) {
      return { isSuccessful: false, message: "Doesn't exist" };
    }
    const result = await convertPdfToMd({ inputPdfFilePath: absolutePath });
    return result;
  }

  const parsedPath = path.parse(absolutePath);
  const extension = parsedPath.ext;

  const targetFormat = audioFileExtensions.includes(extension)
    ? "wav"
    : videoFileExtensions.includes(extension)
    ? "mp4"
    : // : imageFileExtensions.includes(extension)
      // ? "png"
      undefined;

  if (!targetFormat) {
    return { isSuccessful: false, message: "File isn't audio/video/image" };
  }

  const result = await compressConvert(absolutePath, {
    targetFormat,
    is16bitWav: targetFormat === "wav",
    keepOriginal: false,
    // NB: 10fps isn't nice to watch for movies. Let's finetune this
    // fps: targetFormat === "mp4" ? 10 : undefined,
    sizeWidthPx: targetFormat === "mp4" ? 768 : undefined, //targetFormat === "png" ? 1920 :
  });

  return { isSuccessful: !!result };
};

watchAudioVideoDoc.config = {
  isHeavy: true,
  isInternetRequired: false,
  isBrowserRequired: false,
} satisfies StandardFunctionConfig;

watchAudioVideoDoc.startupStrategy = "queue";

watchAudioVideoDoc.filter = (eventName, absolutePath) => {
  if (eventName !== "add") {
    return false;
  }

  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return false;
  }
  if (!absolutePath.startsWith(projectRoot)) {
    return false;
  }

  if (!fs.existsSync(absolutePath)) {
    // could be that it doesn't exist already
    return false;
  }

  const parsedPath = path.parse(absolutePath);

  const extension = parsedPath.ext;
  const subextensions = getSubExtensions(absolutePath);

  // in case of doc files, we want to keep the original!
  if (docFileExtensions.includes(extension)) {
    const potentialMdFile = path.join(parsedPath.dir, `${parsedPath.name}.md`);
    const shouldConvert = !fs.existsSync(potentialMdFile);
    return shouldConvert;
  }

  if (readonlyDocFileExtensions.includes(extension)) {
    // if it's a .pdf, only convert if there's not already a .doc, .docx or .md with the same name
    const potentialSourceFilePaths = docFileExtensions
      .concat(".md")
      .map((extension) =>
        path.join(parsedPath.dir, `${parsedPath.name}${extension}`)
      );
    const shouldConvert = isAllTrue(
      potentialSourceFilePaths.map((p) => !fs.existsSync(p))
    );
    return shouldConvert;
  }

  // in case of audio, video, and image files, we want to remove the original, so it should just never be there.

  const extensionsToWatch = audioFileExtensions
    .concat(videoFileExtensions)
    .concat(imageFileExtensions);

  if (!extensionsToWatch.includes(extension)) {
    // extension that we don't care about
    return false;
  }

  if (subextensions.includes(temporaryConvertedSubextension)) {
    // this is a temporary file (see ffmpeg-util)
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }

  // its a audio/video/image file, added into the project, in the wrong format
  return true;
};
