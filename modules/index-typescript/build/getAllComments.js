"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllComments=void 0;var ts_morph_1=require("ts-morph"),makeTsComment_1=require("./makeTsComment"),getAllComments=function(e,t,m){var n,a=null===(n=e.asKind(ts_morph_1.SyntaxKind.VariableDeclaration))||void 0===n?void 0:n.getName(),o=e.getText(),r=e.getLeadingCommentRanges().map((function(e){return(0,makeTsComment_1.makeTsComment)({operationRelativeTypescriptFilePath:m,commentRange:e,rawStatement:o,statementName:a,fileContent:t})})),i=e.getTrailingCommentRanges().map((function(e){return(0,makeTsComment_1.makeTsComment)({operationRelativeTypescriptFilePath:m,commentRange:e,rawStatement:o,statementName:a,fileContent:t})}));return r.concat(i)};exports.getAllComments=getAllComments;
//# sourceMappingURL=getAllComments.js.map