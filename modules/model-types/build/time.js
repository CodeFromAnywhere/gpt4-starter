"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateTime=void 0;const generateTime=()=>Date.now();exports.generateTime=generateTime;
/**
NB: tried to do it with typescript, dynamically, but doesn't work

export type AtKey<TKey extends string> = `${TKey}At`
export type DateKey<TKey extends string> = `${TKey}Date`
export type TimeKey<TKey extends string> = `${TKey}Time`

export type TimeObject<TKey extends string> = {
  [AtKey<TKey>]:number;
  // [`xxxDate`]:string;
  // [`xxxTime`]:string;
}
type Y = AtKey<"woo">

type Objo = {
  [Y]: "lol"
}
//type X = TimeObject<"woo">
*/
//# sourceMappingURL=time.js.map