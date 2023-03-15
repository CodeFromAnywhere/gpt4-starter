"use strict";
// import { setRandomTimezone } from "set-random-timezone";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
/**
 * To enable possibility to change the timezone in the OS, this is the actually correct time, assuming we are in timezone GMT+1
 */
var time = function () {
    var nowMs = Date.now();
    var nowDate = new Date(nowMs);
    var fakeOffsetMs = 60000 * nowDate.getTimezoneOffset();
    // hardcoded on GMT+1
    var realOffsetMs = 8 * 60 * 60000;
    var myTimeMs = nowMs + fakeOffsetMs + realOffsetMs;
    var myTimeDate = new Date(myTimeMs);
    //   console.log({
    //     nowMs,
    //     myTimeMs,
    //     fakeOffsetH: fakeOffsetMs / 3600000,
    //     realOffsetMs: realOffsetMs / 3600000,
    //   });
    //setRandomTimezone();
    return {
        timeString: "".concat(myTimeDate.getHours(), ":").concat(myTimeDate.getMinutes()),
        myTimeDate: myTimeDate,
        myTimeMs: myTimeMs,
    };
};
exports.time = time;
//# sourceMappingURL=time.js.map