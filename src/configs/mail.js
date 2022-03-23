const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "601840969bf795", // generated ethereal user
      pass: "a9466674ea4a91", // generated ethereal password
    },
  });


  module.exports=transporter;