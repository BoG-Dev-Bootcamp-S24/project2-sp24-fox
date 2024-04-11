import connectDB from ".."
import Animal from "../models/Animal"
import User from "../models/User"

export default async function getAllAnimals() {
    try {
        await connectDB()
        const result = await Animal.find({}).lean()

        const newResult = await Promise.all(result.map(async(element) => {
            const name = await User.findById({_id: element.owner})
            element.owner = name.fullName;
            
            return element
        }));
        return Promise.all(newResult)
    } catch (error) {
        console.error(error)
    }
}
