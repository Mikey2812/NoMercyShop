import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

    const createPost = async (req, res) => {
        let avatar = req.files.avatar;
        const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${avatar.name}`);
        await avatar.mv(imagePath);
        console.log(req.body);
        res.send("File upload");
        // const data = await Post.create(req.body);
        // res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    // const getAllPosts = async (req, res) => {
    //     const page = Number(req.query.page) || 1;
    //     const limit = Number(req.query.limit) || 10;
    //     // const search = req.query.search || '';
    //     const skip = (page - 1) * limit;
    //     const categories = await Post.find({}).skip(skip).limit(limit);
    //     // const categories = await Post.find({name: { $regex: search, $options: 'i' }}).skip(skip).limit(limit);
    //     const totalCategories = await Post.countDocuments({});
    //     const numOfPages = Math.ceil( totalCategories / limit);
    //     res.status(StatusCodes.OK).json({ categories, totalCategories, numOfPages});
    // };
    
    // const deleteCategory = async (req, res) => {
    //     const { id: categoryID } = req.params;
    //     await Category.findOneAndRemove({ _id: categoryID });
    //     res.status(StatusCodes.OK).json({ message: 'Success! Category removed' });
    // }
    
export { createPost };