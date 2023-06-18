import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

    const createPost = async (req, res) => {
        const created_By = req.user.Account_Id;
        const data = await Post.create(req.body);
        let avatar = req.files.avatar;
        const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${data._id}.jpg`);
        await avatar.mv(imagePath);
        data.avatar = `${data._id}.jpg`;
        data.created_By = created_By;
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

    const getPostByID = async (req, res) => {
        const id = req.params.id;
        const values = await Post.findById({_id: id});
        if(!values){
            res.status(StatusCodes.UNAUTHORIZED).json({message: `No post with id :${id}`});
        }
        res.status(StatusCodes.OK).json({ values});
    };

    const editPost = async(req, res) => {
        const id = req.params.id;
        const post = await Post.findOne({ _id: id });
        if(!post){
            res.status(StatusCodes.UNAUTHORIZED).json({message: `No post with id :${id}`});
        }
        Object.assign(post, req.body);
        if(req.files && req.files.avatar){
            const avatar = req.files.avatar
            const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${id}.jpg`);
            await fs.unlink(imagePath, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.log('File not found');
                    } else {
                        console.log('An error occurred while deleting the file');
                    }
                } else {
                    console.log('File deleted successfully');
                }
            });
            await avatar.mv(imagePath);
        }
        post.save();
        res.status(StatusCodes.OK).json({ values : post});
    }

    const deletePost = async(req, res) => {
        const id = req.params.id;
        await Post.deleteOne({ _id: id });
        const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${id}.jpg`);
        fs.unlink(imagePath, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.log('File not found');
                } else {
                    console.log('An error occurred while deleting the file');
                }
            } else {
                console.log('File deleted successfully');
            }
        });
        res.status(StatusCodes.OK).json({ message: 'Success! Post removed' });
    }

    const changeStatus = async(req, res) => {
        const _id = req.params.id;
        const status = req.body.status;
        await Post.findByIdAndUpdate(_id, {status});
        res.status(StatusCodes.OK).json({message: `Success! ${status === 1 ? 'Active' : 'Block'} Posts` });
    }
    
export { createPost, getAllPosts, getPostByID, editPost, deletePost, changeStatus };