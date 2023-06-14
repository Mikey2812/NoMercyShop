import User from '../models/User.js';
// import BadRequestError from '../errors/index'
import { StatusCodes } from 'http-status-codes';
// import nodemailer from "nodemailer";

//     const sendEmail = async (req, res) => {
//         let testAccount = await nodemailer.createTestAccount();

//         let transporter = nodemailer.createTransport({
//             host: 'smtp.ethereal.email',
//             port: 587,
//             auth: {
//                 user: 'tranlequanghuy281201@gmail.com', // generated ethereal user
//                 pass: '0943877608Huy@', // generated ethereal password
//             },
//         });

//     // send mail with defined transport object
//         let info = await transporter.sendMail({
//             from: '"Fred Foo 👻" <tranlequanghuy281201@gmail.com>', // sender address
//             to: "tranlequanghuy281201@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//         });

//         console.log("Message sent: %s", info.messageId);
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//         // Preview only available when sending through an Ethereal account
//         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     }

    const login = async (req, res) => {
        const { email, password } = req.body;
        
        if (!email || !password) {
            res.status(StatusCodes.BAD_REQUEST).json({message: 'Please enter email and password'});
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Email wrong'});
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Password wrong'});
        }

        const token = user.createJWT();
        user.password = undefined;

        res.status(StatusCodes.OK).json({ user, token, location: user.location });
        
    };

    const logout = async (req, res) => {
    //     res.cookie('token', 'logout', {
    //         httpOnly: true,
    //         expires: new Date(Date.now() + 1000),
    //     });
    //     res.status(StatusCodes.OK).json({ msg: 'Admin logged out!' });
    };

    const register = async (req, res) => {
        const { firstname, lastname, email, password, phone } = req.body;
        if (!firstname || !lastname || !email || !password || !phone) {
            res.status(StatusCodes.BAD_REQUEST).json({message: 'Please provide all values'});
        }
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            res.status(StatusCodes.BAD_REQUEST).json({message: 'Email already in use'});
        }
        const user = await User.create({ firstname, lastname, email, password, phone });
        const token = user.createJWT();
        user.password = undefined;
        res.status(StatusCodes.OK).json({ user, token});
    }

export { login, logout, register };