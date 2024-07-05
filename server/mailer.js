const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
});

const sendmail = (to, subject, text) => {
    const mailOptions = {
        from: 'Adarsh Singh <adarshsi.info@gmail.com>',
        to,
        subject,
        text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ', info.response);
    })
}

module.exports = sendmail;