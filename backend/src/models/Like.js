import mongoose, { SchemaTypes } from 'mongoose';

    const LikeSchema = new mongoose.Schema({
        postId: {
            type: SchemaTypes.ObjectId,
        },
        commentId: {
            type: SchemaTypes.ObjectId,
        },
        userId: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: [true, 'Please provide userId'],
        },
        type: {
            type: Number,
            maxlength: 1,
            required: [true, 'Please provide type'],
        },
    },{ timestamps: true })

export default mongoose.model('Like', LikeSchema);