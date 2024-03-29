import mongoose from 'mongoose'
const Schema = mongoose.Schema

const trainingLogSchema = new Schema ({
    user: {
        type: ObjectId,
        required: true
    },
    animal: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
})

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema);
