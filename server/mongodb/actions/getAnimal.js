import connectDB from "..";
import Animal from "../models/Animal";


export default async function getAnimal(req) {
  try {
    await connectDB();
    const { id } = req
    const result = await Animal.findById({_id: id})

    return result;
  } catch (error) {
    console.error(error)
  }
}
