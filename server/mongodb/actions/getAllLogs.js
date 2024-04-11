import connectDB from ".."
import Animal from "../models/Animal";
import TrainingLog from "../models/TrainingLog";
import User from "../models/User";

export default async function getAllLogs() {
    try {
        await connectDB()

        const result = await TrainingLog.find({}).lean()

        const newResult = await Promise.all(result.map(async(element) => {
            const name = await User.findById({_id: element.user})
            const animal = await Animal.findById({_id: element.animal})
            element.user = name.fullName;
            element.animal = animal.name;
            element.breed = animal.breed;
            
            return element
        }));
        return Promise.all(newResult)

    } catch (error) {
        console.error(error)
    }

}
