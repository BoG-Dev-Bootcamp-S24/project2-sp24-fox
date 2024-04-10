import connectDB from "..";
import TrainingLog from "../models/TrainingLog";
import {ObjectId} from "mongodb"

export default async function getUsersLogs(user) {
   try {
    await connectDB();
    const logs = await TrainingLog.find({user: new ObjectId(user)})
    return logs;
   } catch (error) {
    console.error(error)
   }
}
