import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
    const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please provide title'],
        },
        slug: { type: String, slug: "title" },
        description: {type: String, required: [true, 'Please provide description']},
        content: {type: String, required: [true, 'Please provide content']},
        avatar: {type: String},
        number_like: { type: Number, default: 0},
        number_comment: { type: Number, default: 0},
        view: { type: Number, default: 0},
        status: {
            type: Number,
            maxlength: 1,
            default: 1,
        },
    },{ timestamps: true })

export default mongoose.model('Post', PostSchema);