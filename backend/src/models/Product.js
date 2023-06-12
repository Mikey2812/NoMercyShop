import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
    const ProductSchema = new mongoose.Schema({
        category: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: [true, 'Please provide name'],
            minlength: 3,
            maxlength: 30,
            unique: true,
        },
        slug: { type: String, slug: "name" },
        description: {type: String},
        image: {type: String},
        star: { type: Number, default: 0},
        price: {type: Number, required: true},
        discount: {type: Number, default: 0, maxlength:3},
        status: {
            type: Number,
            maxlength: 1,
            default: 1,
        },
    },{ timestamps: true })

export default mongoose.model('Product', ProductSchema);