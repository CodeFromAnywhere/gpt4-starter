import { sendMail } from "./sendMail";

export const sendMailTest = () => {
  sendMail({
    to: "wijnandworld@hotmail.com",
    subject: "Login Clarity",
    text: "Yoyoyo your code 123456",
  });
};
sendMailTest();
