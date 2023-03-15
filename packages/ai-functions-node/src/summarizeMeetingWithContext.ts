import { BackendAsset } from "asset-type";
import { isEmail } from "model-types";
import { sendMail } from "communication-wrapper";
import { youtubeToMp4 } from "youtube-to-mp3";
import { signupBare } from "server-login";
import { processAsset } from "asset-functions-node";
import { FunctionContext } from "function-types";
import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";
import { StandardFunctionConfig } from "function-types";

/**
Endpoint that onboards users into Clarity AI
*/
export const summarizeMeetingWithContext = async (
  functionContext: FunctionContext,

  /**
   * TITLE: Email (required)
   */
  email?: string,
  /**
   * TITLE: Youtube URL of your meeting (optional)
   */
  meetingYoutubeUrl?: string,
  /**
   * TITLE: Audiofile of your meeting (optional)
   */
  meetingAudio?: BackendAsset
) => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { isSuccessful: false, message: "No projectroot" };
  }
  const hasMeetingYoutubeUrl = meetingYoutubeUrl !== "" && meetingYoutubeUrl;
  const hasMeetingAudio = !!meetingAudio;
  if (hasMeetingAudio && hasMeetingYoutubeUrl) {
    return {
      isSuccessful: false,
      message: "Please provide either a yoube URL or some audio, not both",
    };
  }

  if (!email || !isEmail(email)) {
    return {
      isSuccessful: false,
      message: "Please fill in a valid email address",
    };
  }

  email = email.toLowerCase();
  const userBaseFolderPath = path.join(
    projectRoot,
    "knowledge",
    "persons",
    email
  );
  // make a directory for the user
  if (!fs.existsSync(userBaseFolderPath)) {
    await fs.mkdir(userBaseFolderPath, { recursive: true });
  }

  if (meetingAudio) {
    // process the asset if it's there
    meetingAudio = await processAsset(meetingAudio, {
      customAbsoluteFolderPath: userBaseFolderPath,
    });
  }

  const signupResult = await signupBare({
    emailOrPhone: email,
    customEmail: (otpCode, email) =>
      `Hi there! 
      
I'm happy to welcome you to the private alpha of  Clarity AI. 
      
Please click here to confirm your registration and continue: 

https://clarity.codefromanywhere.com/signup-confirm?otp=${otpCode}&emailOrPhone=${email}
      
You can also fill in the code manually. The code is "${otpCode}". The code is valid for 15 minutes.

As a small present I've given you 20 credits so you can get started doing some productive work with your voice.

Kind regards, 

Punkesh
Marketing Manager at Clarity AI`,
    credit: 20,
  });

  if (!signupResult.isSuccessful) {
    // might already have an account
    return { isSuccessful: false, message: signupResult.message };
  }

  if (!meetingAudio && !meetingYoutubeUrl) {
    return {
      isSuccessful: true,
      message:
        "You have applied for the private beta. To confirm your application, please verify your email.",
    };
  }

  // if you filled in either an audio or a youtube URL, send email

  await sendMail({
    to: email,
    subject: "Your meeting is being summarised",
    text: `Please wait while we are summarising your meeting, this might take a while. Please make sure to verify your account in the meantime (see other email).`,
  });

  if (meetingYoutubeUrl) {
    youtubeToMp4(meetingYoutubeUrl, {
      destinationFolderPath: userBaseFolderPath,
      isToMp3: true,
    });

    return {
      isSuccessful: true,
      message:
        "Your video is being processed. The results will be available in your account later (check your mail)",
    };
  }

  return {
    isSuccessful: true,
    message:
      "Your audio has been uploaded and being processed. The result will later be available in your account. Please check your mail to unlock it.",
  };
};

summarizeMeetingWithContext.config = {
  isPublic: true,
  authorizations: { public: "x" },
} satisfies StandardFunctionConfig;
