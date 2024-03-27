import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animalSchema = new Schema ({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    owner: {
        type: ObjectId,
        required: true
    },
    hoursTrained: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: string,
        required: true
    }
})