import { execOnce } from "next/dist/shared/lib/utils";
import createAnimal from "../../../../server/mongodb/actions/createAnimal";

export default async function handler(req, res)  {

    try {
        if (req.method == "POST") {
            const result = await createAnimal(req.body);
            result === "Success" ? res.status(200).send("Success") : res.status(400).send("Failure")
        }
    } catch (error) {
        console.error(error)
    }


}