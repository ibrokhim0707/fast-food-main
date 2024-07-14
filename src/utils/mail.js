const nodemailer = require("nodemailer");
const { emailConfig } = require("../../config/index");

const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

exports.sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: emailConfig.user,
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
