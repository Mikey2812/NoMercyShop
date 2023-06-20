import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide first name'],
    },
    lastname: {
        type: String,
        required: [true, 'Please provide last name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
    },
    phone: {
        type: String,
        required: [true, 'Please provide phone'],
        trim: true,
        minlength: 10,
        maxlength: 11,
    },
    birthday: {
        type: Date,
    },
    sex: {
        type: Number,
        maxlength: 1,
    },
    avatar: {
        type: String,
    },
    type: {
        type: Number,
        default: 1,
        maxlength: 1,
    },
    status: {
        type: Number,
        default: 1,
        maxlength: 1,
    },
}, { timestamps: true });

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ UserId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME, })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', UserSchema)