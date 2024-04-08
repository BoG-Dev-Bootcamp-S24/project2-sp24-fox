import connectDB from "..";
import Animal from "../models/Animal";
import { ObjectId } from "mongodb"

export default async function createAnimal(req) {
    try {
        await connectDB();
        let { name, breed, owner, hoursTrained, profilePicture } = req
        const newAnimal = new Animal({name, breed, owner: new ObjectId(owner), hoursTrained, profilePicture})
        await newAnimal.save()
        return newAnimal;
      } catch (error) {
        console.log(error)
      }
}
