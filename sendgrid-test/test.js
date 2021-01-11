// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
const msg = {
  to: "arielyiyitou@gmail.com",
  from: "survey-sender-test@hotmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg);
