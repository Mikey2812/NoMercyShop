const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'tranlequanghuy281201@gmail.com', // generated ethereal user
            pass: '0943877608Huy@', // generated ethereal password
        },
    });

  // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <tranlequanghuy281201@gmail.com>', // sender address
        to: "tranlequanghuy281201@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendEmail;