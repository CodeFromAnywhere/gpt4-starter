"use strict";
/**
 * Slugification for filepaths in specific
 */
function fileSlugify(e){var i="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·,:;",r=new RegExp(i.split("").join("|"),"g");return e.toString().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz----".charAt(i.indexOf(e))})).replace(/&/g,"-and-").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");// Trim - from end of text
}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileSlugify=void 0,exports.fileSlugify=fileSlugify;
//# sourceMappingURL=fileSlugify.js.map