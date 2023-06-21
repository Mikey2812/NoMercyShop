import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;
import Comment from '../models/Comment.js';
import Like from '../models/Like.js';
import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';

    const createComment = async (req, res) => {
        const comment = req.body;
        comment.userId = req.user.Account_Id;
        await Post.findByIdAndUpdate(comment.postId,  { $inc: { number_comment: 1 } },);
        const data = await Comment.create(comment);
        data.path = `${data.path}.${data.id}`;  
        data.save();
        res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    const getCommentByPostID = async (req, res) => {
        const postId = req.params.postId;
        const userlogin = req.query.userlogin || '';
        if (!ObjectId.isValid(postId)) {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid postId');
        }
        const comments = await Comment.find({ postId: new ObjectId(postId) }).sort({ path: 1 })
                                        .populate('userId', 'firstname lastname').lean();
        for (const comment of comments) {
            if (userlogin !== ''){
                const liked = await Like.findOne({
                    commentId: comment._id,
                    userId: userlogin,
                });
                comment.isLiked = liked ? true : false;
            }
            else {

                comment.isLiked = false;
            }
        }
        res.status(StatusCodes.OK).json({comments, numberComments: comments.length});
    };

    const editCommentByID = async (req, res) => {
        const id = req.params.id;
        const comments = await Comment.findById(id);
        if(!comments) {
            res.status(StatusCodes.UNAUTHORIZED).json({message: `No comment with id :${id}`});
        }
        comments.content = req.body.content;
        comments.save();
        res.status(StatusCodes.OK).json({comments});
    };
    
    const deleteComment = async (req, res) => {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.OK).json({ message: 'Success! Comment removed' });
    }

    const deleteCommentByPath = async (req, res) => {
        const comments = await Comment.find({ path: { $regex: `^${req.params.path}` }});
        if(!comments){
            res.status(StatusCodes.OK);
        }
        await Post.findByIdAndUpdate(comments[0].postId,  { $inc: { number_comment: -comments.length } },);
        await Comment.deleteMany({ path: { $regex: `^${req.params.path}` } });
        res.status(StatusCodes.OK).json({ message: 'Success! Comment removed' });
    }
    
export { createComment, getCommentByPostID, editCommentByID, deleteComment, deleteCommentByPath };