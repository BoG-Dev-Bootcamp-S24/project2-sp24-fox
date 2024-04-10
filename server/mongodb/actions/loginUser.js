
import connectDB from ".."
import Animal from "../models/Animal";
import TrainingLog from "../models/TrainingLog";
import User from "../models/User";
import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"/
export default async function loginUser(req) {
    try {
        await connectDB();
        // const secret = new TextDecoder().decode("BoG")
        
        const {email, password} = req;
        if (email && password) {
            const user = await User.findOne({email})
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                const id = user._id;
                const fullName = user.fullName;
                if (user.admin) {
                   return {adminstatus: result, id, fullName}
                } else {
                   return {adminstatus: false, id, fullName}
                }
            }
        } else {
            return;
        }
        
        
    } catch (error) {
        console.log(error)
    }
}
