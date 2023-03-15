"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAuthorizationInfo=void 0;var js_util_1=require("js-util"),getAuthorizationInfo=function(i,o){var t,n=((null===(t=null==i?void 0:i.currentPersonCalculated)||void 0===t?void 0:t.groupSlugs)||[]).concat("public");if(n.includes("admin"))
// admins can execute everything
return!0;
/**
     * Function might have config `StandardFunctionConfig`
     */var u=o.config;if(null==u?void 0:u.isPublic)
// a public function can always be executed
return!0;var r=null==n?void 0:n.map((function(i){var o;return null===(o=null==u?void 0:u.authorizations)||void 0===o?void 0:o[i]})).filter(js_util_1.notEmpty).join("");
// console.log({ name: fn.name, config, authorizationString, hasAuthorization });
return r.includes("x")};
/**
 * returns `AuthorizationInfo` for a device + function
 */exports.getAuthorizationInfo=getAuthorizationInfo;
//# sourceMappingURL=getAuthorizationInfo.js.map