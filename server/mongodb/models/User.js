import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema ({
    _id: {
        type: ObjectId,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }
})
