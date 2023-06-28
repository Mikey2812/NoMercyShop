import Admin from '../models/Admin.js';
import { StatusCodes } from 'http-status-codes';

    const login = async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(StatusCodes.BAD_REQUEST).json({message: 'Please enter email and password'});
        }
        const user = await Admin.findOne({ email }).select('+password');
        if (!user) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Email not found'});
        }

        // const isPasswordCorrect = await user.comparePassword(password);
        const isPasswordCorrect = await user.password === password;
        if (!isPasswordCorrect) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Password incorrect'});
        }
        const token = user.createJWT();
        // attachCookie({ res, token });
        user.password = undefined;

        res.status(StatusCodes.OK).json({ user, token, message: 'Login Successful' });
    };

export { login };