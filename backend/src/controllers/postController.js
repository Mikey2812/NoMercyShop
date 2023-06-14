import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

    const createPost = async (req, res) => {
        console.log(req);
        const data = await Post.create(req.body);
        let avatar = req.files.avatar;
        const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${data._id}.jpg`);
        await avatar.mv(imagePath);
        data.avatar = `${data._id}.jpg`;
        data.save();
        res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    const getAllPosts = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        // const search = req.query.search || '';
        const skip = (page - 1) * limit;
        const values = await Post.find({}).skip(skip).limit(limit);
        // const values = await Post.find({name: { $regex: search, $options: 'i' }}).skip(skip).limit(limit);
        const totalValues = await Post.countDocuments({});
        const numOfPages = Math.ceil( totalValues / limit);
        res.status(StatusCodes.OK).json({ values, totalValues, numOfPages});
    };
    
export { createPost, getAllPosts };