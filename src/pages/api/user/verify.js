import { NextResponse } from "next/server";
import loginUser from "../../../../server/mongodb/actions/loginUser"

export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            const result = await loginUser(req.query);
            result ? res.status(200).json(result) : res.status(500).send("Failure")
            // console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}