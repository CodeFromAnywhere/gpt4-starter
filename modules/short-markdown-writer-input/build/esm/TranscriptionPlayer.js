/**
If it also has mp3 or mp4, we should be able to click through the parts based on the transcription. Subtitles on sentence level and word-level would be very cool to have in realtime, so let's make a react-component for this. Related to ShortMarkdown player.

I have the `Transcription` file now. It should be possible with simple HTML and a bit of React state (Javascript) to create a realtime video generation renderer from the transcription, which plays the audio and shows text in different ways, and enables you to navigate through the videos.

Possibly, this is the singlemost useful thing I can be doing now, since it demonstrates what we are making much more. If I get this to work and if every new audio immeiately goes onto the OS and is exposed via a URL, I can share any audio message via clarity. Huge shareability potential!

An export button would be great too, though we might need to use ffmpeg for the real deal.

Let's not dream too much, let's just doo this first.
 */
export var TranscriptionPlayer = function (props) {
    var transcription = props.transcription;
    // get online, this is definitely worth it.
    // audio play/pause, volume, speed, and time setting (ui scrolling through the audio)
    // hook audio time to the component, preferably 10fps minimum
    // calculate which sentence needs to be rendered and in the sentence, which word
    // scroll down to see the entire text as well, with the sentence + word highlighted, hovering over a sentence highlights it, clicking the sentence goes there in the video.
};
