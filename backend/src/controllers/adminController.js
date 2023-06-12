import Admin from '../models/Admin.js';
import { StatusCodes } from 'http-status-codes';

    const login = async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(StatusCodes.BAD_REQUEST).json({message: 'Please enter email and password'});
        }
        const user = await Admin.findOne({ email }).select('+password');
        if (!user) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Email wrong'});
        }

        // const isPasswordCorrect = await user.comparePassword(password);
        const isPasswordCorrect = await user.password === password;
        if (!isPasswordCorrect) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: 'Password wrong'});
        }
        const token = user.createJWT();
        // attachCookie({ res, token });
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

export { login };