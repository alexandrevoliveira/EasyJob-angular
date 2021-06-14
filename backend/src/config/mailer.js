const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f85b56c8d1ce0",
    pass: "170ad550ae4fbf"
  }
});