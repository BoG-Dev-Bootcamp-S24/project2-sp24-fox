import connectDB from "..";
import User from "../models/User";
import bcrypt from "bcryptjs"

export default async function createUser(req) {
  try {
    await connectDB();
    let { fullName, email, password, admin } = req
    
    password = await bcrypt.hash(password,10); 
    const newUser = new User({fullName, email, password, admin})
    await newUser.save()

  } catch (error) {
    console.log(error)
  }
}
