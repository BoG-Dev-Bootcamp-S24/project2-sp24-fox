import createUser from "../../../../server/mongodb/actions/createUser";
import cookie from "cookie"

export default async function handler(req, res)  {
    try {
        if (req.method == "POST") {
            const result = await createUser(req.query);
            res.setHeader('Set-Cookie', cookie.serialize('session' , "", {
                expires: new Date(0),
                path: '/api/user'
            }))
            res.status(200).send("Success")
        } else if (req.method == "DELETE") {
            res.setHeader('Set-Cookie', cookie.serialize('session' , "", {
                expires: new Date(0),
                path: '/'
            }))
            res.status(200).send("Success")
        }
    } catch (error) {
        console.log(error)
    }
    
    

}