import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
    const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please provide title'],
        },
        slug: { type: String, slug: "title" },
        content: {type: String, required: true},
        avatar: {type: String, required: true},
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