import mongoose from 'mongoose'
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

export default mongoose.models?.Animal || mongoose.model("animal", animalSchema);