import mongoose from 'mongoose';

    const TopicSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please provide name'],
            minlength: 3,
            maxlength: 20,
            unique: true,
        },  
        numberPost: {
            type: Number,
            default: 0,
        },
        status: {
            type: Number,
            maxlength: 1,
            default: 1,
        },
    },{ timestamps: true })

export default mongoose.model('Topic', TopicSchema);
