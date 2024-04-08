import createLog from "../../../../server/mongodb/actions/createLog"
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
            const result = await createLog(req.body);
            if (result) {
                cookies.logs.push(result);
                const token = jwt.sign(cookies, "BoG")
                res.setHeader('Set-Cookie', cookie.serialize('session' , token, {
                    path: "/"
                }))
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failure")
            }
       }
    } catch (error) {
        console.error(error)
    }


}