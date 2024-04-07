
// import { cookies } from "next/headers";
import cookie from "cookie";
import loginUser from "../../../../server/mongodb/actions/loginUser"
import jwt from "jsonwebtoken";
export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            const session = req.headers.cookie ? cookie.parse(req.headers.cookie) : null;
            let result;
            if (session !== null && session.session) {
                result = jwt.verify(session.session, "BoG")
            } else {
                if (Object.keys(req.body).length == 0) {
                    return res.status(500).send("Failure");
                }
                result = await loginUser(req.body);
                if (result) {
                    const token = jwt.sign(result, "BoG");
                    res.setHeader('Set-Cookie', cookie.serialize('session' , token))
                } else {
                    res.status(500).send("Failure")
                }
                
            }
            result ? res.status(200).json(result) : res.status(500).send("Failure")
        }
    } catch (error) {
        console.log(error)
    }
}