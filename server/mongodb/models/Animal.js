import mongoose from 'mongoose'
import { ObjectId } from "mongodb"
const Schema = mongoose.Schema

const animalSchema = new Schema ({
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
        ref: "User",
        required: true
    },
    hoursTrained: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }
})

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema);