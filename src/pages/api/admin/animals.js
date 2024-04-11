import getAllAnimals from "../../../../server/mongodb/actions/getAllAnimals"

export default async function handler(req, res)  {
    try {
        if (req.method == "GET") {
            const result = await getAllAnimals();

            result ? res.status(200).json(result) : res.status(400).send("Failure")
        }
    } catch (error) {
        console.error(error)
    }

}