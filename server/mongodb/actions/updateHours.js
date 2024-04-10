import connectDB from "..";
import Animal from "../models/Animal";

export default async function updateHours(req) {
    try {
        await connectDB();
        const { animal, hours } = req;
        const doc = await Animal.findOneAndUpdate({_id: animal}, {$inc :{ hoursTrained: hours}, returnDocument: "after"});
        return doc

    } catch (error) {
        console.error(error);
    }
}
