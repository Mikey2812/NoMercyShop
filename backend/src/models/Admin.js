import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
    const AdminSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: [true, 'Please provide first name'],
            minlength: 3,
            maxlength: 20,
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, 'Please provide last name'],
            minlength: 3,
            maxlength: 20,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            validate: {
                validator: validator.isEmail,
                message: 'Please provide a valid email',
            },
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide password'],
            minlength: 6,
            select: false,
        },
        location: {
            type: String,
            trim: true,
            default: 'my city',
        },
    },{ timestamps: true })

    AdminSchema.pre('save', async function () {
    // console.log(this.modifiedPaths())
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    })

    AdminSchema.methods.createJWT = function () {
    return jwt.sign({ AdminId: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
    }

    AdminSchema.methods.comparePassword = async function (candidatePassword) {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch
    }

export default mongoose.model('Admin', AdminSchema);