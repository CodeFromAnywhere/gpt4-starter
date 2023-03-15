"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/**
test cases, measure performance:

- big file (1mb) without frontmatter
- big file (1mb) with correct frontmatter
- big file (1mb) with frontmatter with syntax error
- same with small files

TODO:

Implement test

If this works, I can also do many performance improvements for fs-orm, for both read but also for updates. Ideas:

- reading JSON arrays item per item, closing early if a condition is met
- mapping JSON arrays item per item, closing early if a condition is met
- updating/reading kvmd storage
- updating frontmatter
- crud csv

Research more first, thinks like a JSONStream could greatly simplify implementation for this, as well as understanding such code.

 */
var test=function(){
// 1) create the files in /assets
// 2) use one by one, use `readFrontmatter` for every file, while measuring time
};test();
//# sourceMappingURL=readFrontmatter.test.js.map