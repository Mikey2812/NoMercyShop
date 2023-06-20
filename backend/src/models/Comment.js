import mongoose, { SchemaTypes } from 'mongoose';

    const CommentSchema = new mongoose.Schema({
        postId: {
            type: SchemaTypes.ObjectId,
            required: [true, 'Please provide postId'],
        },
        userId: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: [true, 'Please provide userId'],
        },
        content: {
            type: String,
            required: [true, 'Please provide content'],
        },
        numberLike: {
            type: Number,
            default: 0,
        },
        path: {
            type: String,
        }, 
        status: {
            type: Number,
            maxlength: 1,
            default: 1,
        },
        type: {
            type: Number,
            maxlength: 1,
            default: 0,
        },
    },{ timestamps: true })

export default mongoose.model('Comment', CommentSchema);