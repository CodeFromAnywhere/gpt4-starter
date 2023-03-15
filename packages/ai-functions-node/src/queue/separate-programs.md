Idea that is lingering in my mind for a while:

- vscode is great because of the explorer, and it integrates so smoothly
- we kind of want the vscode setup but use different programs for different things. if ever possible, we want to use macos default programs.
- we need an explorer that opens files with the program we choose. possibly in the browser, possibly a raw macos program.

If we have that, we have a much better starting point.
A great feature in vscode as well is pinning, so let's build a simple Electron app that:

- is very resizable a la finder, but has a very good position at the side
- is very good in filepath search and also file content search with multiple filter capabilities. aim for similarity to vscode. 
- will show recently opened files and pinned files on the bottom, where you can also pin/unpin.
- Depending on the filetype and possibly even content and context and goal, the explorer should open your file in a different way. 

Of course we're also developing solutions for an all in one, but it seems incredibly hard to compete with something as simple as a terminal or a barebones macos text editor.

I was doing pretty well with explorer what I had in the web interface, but the problem was: every time it was connected to another, non functional, UI. I need all those menus together instead! I also need it to be production grade software, and if I put everything in one UI, I get into trouble, because I'm editing one part, the other part breaks too. This prevents me from using my own stuff!

