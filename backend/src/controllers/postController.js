import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import Like from '../models/Like.js';
import Topic from '../models/Topic.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

    const createPost = async (req, res) => {
        const { title, description, content, topic } = req.body;
        const topicRes = await Topic.findById(topic);
        if(!topicRes){
            res.StatusCodes(CONFLICT).json({message: 'Topic not found'});
        }
        const objectData = {
            title, 
            description, 
            content, 
            topic:{
                topic_id: topic,
                topic_name: topicRes.name
            },
            created_By: req.user.Account_Id,
        }
        const post = await Post.create(objectData);
        let avatar = req.files.avatar;
        const imagePath = path.join(__dirname, '../../public/uploads/posts/' + `${post._id}.jpg`);
        await avatar.mv(imagePath);
        post.avatar = `${post._id}.jpg`;
        await post.save();
        topicRes.numberPost = topicRes.numberPost + 1;
        await topicRes.save();
        res.status(StatusCodes.CREATED).json({ post, message: 'Create post successful' });
    };

    const getAllPosts = async (req, res) => {

        let filter = {};
        const { status, search, userlogin } = req.query;
        if(status){
            filter.status = status;
        }
        if (search) {
            filter.title = {
              $regex: search,
              $options: 'iu',
            };
        }
        const result = Post.find(filter).sort({ updatedAt: -1 }).lean();

        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const values = await result.skip(skip).limit(limit).exec();

        //Check like
        for (const value of values) {
            if (userlogin && userlogin !== ''){
                const liked = await Like.findOne({
                    postId: value._id,
                    userId: userlogin,
                    type: 0,
                });
                value.isLiked = liked ? true : false;
            }
            else {
                value.isLiked = false;
            }
        }

        const totalValues = await Post.countDocuments(filter);
        const numOfPages = Math.ceil(totalValues / limit);

        res.status(StatusCodes.OK).json({ values, totalValues, numOfPages});
    };

    const getPostByID = async (req, res) => {
        const id = req.params.id;
        const values = await Post.findById({_id: id});
        if(!values){
            res.status(StatusCodes.UNAUTHORIZED).json({message: `No post with id :${id}`});
        }
        res.status(StatusCodes.OK).json({ values });
    };

    const editPost = async(req, res) => {
        const id = req.params.id;
        const post = await Post.findOne({ _id: id });
        if(!post){
            res.status(StatusCodes.UNAUTHORIZED).json({message: `No post with id :${id}`});
        }
        await Topic.findByIdAndUpdate( post.topic.topic_id, { $inc: { numberPost: -1 } });
        const { title, description, content, topic } = req.body;
        const topicRes = await Topic.findByIdAndUpdate( topic, { $inc: { numberPost: 1 } });
        if(!topicRes){
            res.StatusCodes(CONFLICT).json({message: 'Topic not found'});
        }
        const objectData = {
            title, 
            description, 
            content, 
            topic:{
                topic_id: topic,
                topic_name: topicRes.name
            },
        }
        Object.assign(post, objectData);
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
        await post.save();
        res.status(StatusCodes.OK).json({ values : post, message: 'Edit post successful'});
    }

    const deletePost = async(req, res) => {
        const id = req.params.id;
        const deletedPost = await Post.findOneAndDelete({ _id: id });
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
        await Topic.findByIdAndUpdate( deletedPost.topic.topic_id, { $inc: { numberPost: -1 } });
        res.status(StatusCodes.OK).json({ message: 'Success! Post removed' });
    }

    const changeStatus = async(req, res) => {
        const _id = req.params.id;
        const status = req.body.status;
        await Post.findByIdAndUpdate(_id, {status});
        res.status(StatusCodes.OK).json({message: `Success! ${status === 1 ? 'Active' : 'Block'} Posts` });
    }
    
export { createPost, getAllPosts, getPostByID, editPost, deletePost, changeStatus };