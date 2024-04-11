import connectDB from "..";
import Animal from "../models/Animal";
import {ObjectId} from "mongodb"

export default async function getUsersAnimals(user) {
    try {
        await connectDB();
        const animals = await Animal.find({owner: new ObjectId(user)})
        return animals;
        
       } catch (error) {
        console.error(error)
    }
}
