"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailTest = void 0;
var sendMail_1 = require("./sendMail");
var sendMailTest = function () {
    (0, sendMail_1.sendMail)({
        to: "wijnandworld@hotmail.com",
        subject: "Login Clarity",
        text: "Yoyoyo your code 123456",
    });
};
exports.sendMailTest = sendMailTest;
(0, exports.sendMailTest)();
//# sourceMappingURL=sendMail.test.js.map