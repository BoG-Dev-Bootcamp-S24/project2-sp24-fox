
// import { cookies } from "next/headers";
import cookie from "cookie";
import loginUser from "../../../../server/mongodb/actions/loginUser"
import jwt from "jsonwebtoken";
import getUsersAnimals from "../../../../server/mongodb/actions/getUsersAnimals";
import getUsersLogs from "../../../../server/mongodb/actions/getUsersLogs";
export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            
            const result = await loginUser(req.body);
            if (result) {
                const token = jwt.sign(result, "BoG");
                res.setHeader('Set-Cookie', cookie.serialize('session' , token, {
                    path: "/"
                }))
            }
            result ? res.status(200).json(result) : res.status(500).send("Failure")
        } else if (req.method == "GET") {
            const session = req.headers.cookie ? cookie.parse(req.headers.cookie) : null;
            let result;
            if (session !== null && session.session) {
                result = jwt.verify(session.session, "BoG")
                
                result.animals = await getUsersAnimals(result.id)
                result.logs = await getUsersLogs(result.id)
                result ? res.status(200).json(result) : res.status(500).send("Failure")
            } else {
                result ? res.status(200).json(result) : res.status(500).send("Failure")
            }
            
        }
    } catch (error) {
        console.log(error)
        console.error(error)
    }
}