import connectDB from "..";
import TrainingLog from "../models/TrainingLog";
import { ObjectId } from "mongodb"

export default async function createLog(req) {
    try {
        await connectDB();
        let { user, animal, title, date, description, hours} = req
        
        console.log(animal)
        const newLog = new TrainingLog({user: new ObjectId(user), animal: new ObjectId(animal), title, date: new Date(date), description, hours})
        await newLog.save()
        return newLog;
      } catch (error) {
        console.log(error)
      }
}
