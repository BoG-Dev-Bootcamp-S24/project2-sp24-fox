import createAnimal from "../../../../server/mongodb/actions/createAnimal";
import getAnimal from "../../../../server/mongodb/actions/getAnimal";
import updateHours from "../../../../server/mongodb/actions/updateHours";
export default async function handler(req, res)  {
    try {
       if (req.method == "POST") {
            const result = await createAnimal(req.body);
            if (result) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failure")
            }
        } else if (req.method == "GET") {
            const result = await getAnimal(req.query);
            result ? res.status(200).json(result) : res.status(400).send("Failure")
        } else if (req.method == "PATCH") {
            const result = await updateHours(req.body);
            if (result) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failure")
            }
        }
    } catch (error) {
        console.error(error)
    }


}