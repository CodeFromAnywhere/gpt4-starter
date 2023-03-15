# Monitoring

Monitoring: How can I measure performance in a nice way? Key things to have good performance for are:

- everything in `ai-models` (input size indicator + model used + time required)
- `compressConvert` (input file size + conversion done + time required)
- `youtubeController` (video duration + output format + time required)

There are probably some other things that I forgot about that are also important to know its performance of and reliability of. Monitoring is a great way to improve it over time. Besides, if we have a better idea of what takes time, we can even dynamically change priority.

Have a function that runs every minute (CRON) that finds all `.lock` files and puts that information in `locked-files.json` (path[])

Have a function `queueStatus` that returns all information in all lockfiles (if they're still there) and removes the files that are gone. It should also show how many functions are still in queue, grouped by function

Create a cli for `queueStatus`
