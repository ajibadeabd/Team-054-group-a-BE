const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const verify_temp = require("./../../views/email-confirmation")
const resetPass = require("./../../views/resetPass")

module.exports = class Email {

  constructor(user, url) {

    this.to = user.email;

    this.firstName = user.firstName;
    this.url = url;
    this.from = `farm-to-store <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    //gmail
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });
  }
 
  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    // const html = pug.renderFile(`${__dirname}/../../public/views/${template}.pug`, {
    //   firstName: this.firstName,
    //   url: this.url,
    //   subject
    // });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: template,
      // text: htmlToText.fromString(html)
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the fundmylaptop Family!');
  }
  async resetPassword() {
    await this.send(
      resetPass(this.url),
      'Your password reset'
    );
  }
  async sendAccountActivation() {
    await this.send(
      verify_temp(this.url),
      'Your Account Activation Link'
    );
  }
};
