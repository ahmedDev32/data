import fs from "fs";
import path from "path";

let filePath = path.resolve("./Models/products.json");

let handler = async (req, res) => {
    try {
        let id = req.query.Id.replace(/\s+/g, '');
        console.log(id);

        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                return res.status(404).json({ msg: "Error While Reading78 File", success: false });
            } else {
                try {
                    let parsedData = JSON.parse(data); // Parse the JSON data
                    let filteredData = parsedData.find((item) => item.id.replace(/\s+/g, '') === id); // Filter out the data with the given id
                    return res.status(200).json({ data: filteredData, success: true }); // Send the filtered data as response
                } catch (parseError) {
                    return res.status(500).json({ msg: "Error Parsing JSON", success: false });
                }
            }
        });

    } catch (error) {
        return res.status(500).json({ msg: "Internal Error", success: false });
    }
}

export default handler;
