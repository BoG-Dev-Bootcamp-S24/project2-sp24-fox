import createLog from "../../../../server/mongodb/actions/createLog"
export default async function handler(req, res)  {

    try {
       if (req.method == "POST") {
            const result = await createLog(req.body);
            result ? res.status(200).send("Success") : res.status(500).send("Failure")
       }
    } catch (error) {
        console.error(error)
    }


}