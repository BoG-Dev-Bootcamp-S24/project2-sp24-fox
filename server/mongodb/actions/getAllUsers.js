import connectDB from ".."
import User from "../models/User"

export default async function getAllUsers() {
  try {
    await connectDB()
    const result = await User.find({})
    return result
  } catch (error) {
    console.error(error)
  }
}
