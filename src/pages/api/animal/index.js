import { execOnce } from "next/dist/shared/lib/utils";
import createAnimal from "../../../../server/mongodb/actions/createAnimal";
import getAnimal from "../../../../server/mongodb/actions/getAnimal";
import cookie from "cookie"
import jwt from "jsonwebtoken"
export default async function handler(req, res)  {
    try {
       if (req.method == "POST") {
        
        const session = req.headers.cookie ? cookie.parse(req.headers.cookie) : null;
            let cookies;
            if (session !== null && session.session) {
                cookies = jwt.verify(session.session, "BoG")
            }
            const result = await createAnimal(req.body);
            if (result) {
                cookies.animals.push(result);
                const token = jwt.sign(cookies, "BoG")
                res.setHeader('Set-Cookie', cookie.serialize('session' , token, {
                    path: "/"
                }))
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failure")
            }
        } else if (req.method == "GET") {
            const result = await getAnimal(req.query);
            result ? res.status(200).json(result) : res.status(400).send("Failure")
        }
    } catch (error) {
        console.error(error)
    }


}