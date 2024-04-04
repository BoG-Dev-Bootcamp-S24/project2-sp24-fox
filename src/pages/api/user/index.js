import createUser from "../../../../server/mongodb/actions/createUser";

export default async function handler(req, res)  {
    try {
        if (req.method == "POST") {
            await createUser(req.query);
            res.status(200).send("Success")
        }
    } catch (error) {
        console.log(error)
    }
    
    

}