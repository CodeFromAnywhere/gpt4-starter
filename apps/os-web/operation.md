# os-web

Main Clarity OS frontend.

# GOAL: Monetisation and 24/7 deployment <!--DONE 19th of march-->

- ability to connect your homeserver to your credit you have on your master-server

# PRIMARY GOAL: Usable UI for myself <!-- DONE end of march -->

<!--

DEMO VIDEO:

Perfection in this flow:

- import
- file-collection ActionStatus
- ensure watcher / queue works when server already running
- ensure the transcription gets cleaned and analyzed afterwards
- showing the result (cleaned and MarkdownIndex)
- ability to download file collection, including the transcription

-->

File collection api with context: rename, move, copy, delete

Apply new file collection apis to FileCollectionActions

Apply file-specific crud actions to FileActions

Ensure all actions refetch the right queries

Ensure all actions work as expected

openFinder and fileExplorerOpen should be merged. keep fileExplorerOpen, but add support for selecting the file in macos

get open files in pinned file menu

get open file[] in search, even if all other files arent' there yet

make path search load way faster

Ensure actionStatus busy gets reloaded every 2 seconds or so. isn't it better to load the filecollection query again as well? because Action's might create new files as well....

New files aren't always detected: fix watcher

Ignored queue items don't come back: fix it!

Ensure conversion + transcription + cleanup + markdown index work for an mp3/mp4

Upload sometimes starts loading, sometimes not. is it the extension that is blocked, maybe?

Admin option to open JSON and TS files in VSCode immediately on opening it in the menu.

If you have a ts-file open, link to the respective functions inside and db-models

<!-- after this is done, focus on making a good demo video, from the perspective of a new user. angle = request early access -->

## AI automation bugs

1. New recordings and screenshots are saved in desktop by default. Let's watch mov and png there, and immediately copy them over into `recordings/`, but with fixed naming (kebab-case).
2. OpenAI is not giving result all the time, so bigger operations are not fully done, which gives bad results overall. Should keep trying until it works with a big exponential backoff on certain errors. If the API is down, we should have a global time-out setting, and maybe a back-up.
3. Ensure we do cleanup for all our own recorded audio, but not for movies, videos, music, etc?
4. Let's only do markdown indexation for short markdown files for now, and not in `/todo` or `/assets` folders. But let's do it for sure. Making it possible for longer ones too would be great. Let's take some hours to fix that, and also build up a summary etc.
5. Allow iteration on opening file/folder. This way it will be much cheaper than doing all at once. I should turn this on by default by sending a backend api on opening a file collection, for all the files in the collection.
