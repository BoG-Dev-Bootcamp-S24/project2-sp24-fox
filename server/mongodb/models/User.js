import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema ({
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

export default mongoose.models?.User || mongoose.model("User", userSchema);