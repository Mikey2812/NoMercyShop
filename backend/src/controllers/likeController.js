import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;
import Like from '../models/Like.js';
import Comment from '../models/Comment.js';
import { StatusCodes } from 'http-status-codes';
import Post from '../models/Post.js';

    const createLike = async (req, res) => {
        const like = req.body;
        like.userId = req.user.Account_Id;
        if(like.commentId){
            await Comment.findByIdAndUpdate(like.commentId,  { $inc: { numberLike: 1 } },);
        }
        else if (like.postId){
            await Post.findByIdAndUpdate(like.postId,  { $inc: { number_like: 1 } },);
        }
        const data = await Like.create(like);
        res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    const deleteLike = async (req, res) => {
        // const id = req.params.id;
        const type = parseInt(req.query.type);
        const locationId = req.params.locationId    ;
        if(type === 1) {
            await Comment.findByIdAndUpdate(locationId,  { $inc: { numberLike: -1 } },);
            await Like.findOneAndDelete({commentId: locationId, type: 1});
        }
        else {
            await Post.findByIdAndUpdate(locationId,  { $inc: { number_like: -1 } },);
            await Like.findOneAndDelete({postId: locationId, type: 0});
        }
        res.status(StatusCodes.OK).json({ message: 'Delete Like Success' });
    };
    
export { createLike, deleteLike };