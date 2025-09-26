import nodemailer from "nodemailer";
const { EMAIL_FROM, EMAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
const transporter = nodemailer.createTransport({
  host: SMTP_HOST, port: Number(SMTP_PORT || 587), secure: false,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});
export async function sendMail({ subject, text }:{ subject:string; text:string }){
  if (!EMAIL_FROM || !EMAIL_TO) throw new Error("Missing email envs");
  return transporter.sendMail({ from: EMAIL_FROM, to: EMAIL_TO, subject, text });
}
