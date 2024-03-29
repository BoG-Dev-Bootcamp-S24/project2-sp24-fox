import connectDB from ".."
import User from "../models/User";
import bcrypt from "bcryptjs"
export default async function loginUser(req) {
    try {
        await connectDB();
        const {email, password} = req;
        const user = await User.findOne({email})
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const id = user._id;
            if (user.admin) {
                return {adminstatus: result, id}
            } else {
                return {adminstatus: false, id}
            }
            
        } else {
            return;
        }
        
    } catch (error) {
        console.log(error)
    }
}
