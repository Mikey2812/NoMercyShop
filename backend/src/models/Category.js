import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
    const CategorySchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please provide name'],
            minlength: 3,
            maxlength: 30,
            unique: true,
        },
        slug: { type: String, slug: "name" },
        status: {
            type: Number,
            maxlength: 1,
            default: 1,
        },
    },{ timestamps: true })

export default mongoose.model('Category', CategorySchema);