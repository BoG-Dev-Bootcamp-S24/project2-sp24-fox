import getAllLogs from "../../../../server/mongodb/actions/getAllLogs"

export default async function handler(req, res)  {

    try {
        if (req.method == "GET") {
            const result = await getAllLogs();

            result ? res.status(200).json(result) : res.status(400).send("Failure")
        }
    } catch (error) {
        console.error(error)
    }

}