import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

    const getAllUsers = async (req, res) => {
        const data = await User.find({});
        res.status(StatusCodes.OK).json({ data, message: 'Success'});
    };

export { getAllUsers };