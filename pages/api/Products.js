import fs from "fs/promises"; // Use the promise-based version of fs
import ProductsModel from "../../Models/PostProduct";

let handler = async (req, res) => {
    // Set CORS headers to allow all origins
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Uncomment the database fetch if needed
        // let getData_db = await ProductsModel.find({});
        // console.log(getData_db);
        
        // Read the JSON file asynchronously
        let data = await fs.readFile("./Models/products.json", "utf-8");
        let Ordata = JSON.parse(data);
        let parsePros = Ordata.reverse();
        
        // Filter out duplicate entries based on `id`
        let seen = new Set();
        let parsePro = parsePros.filter((item) => {
            let foundData = item.id;
            if (!seen.has(foundData)) {
                seen.add(foundData);
                return true;
            }
            return false;
        });

        return res.status(200).json({ parsePro });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, msg: "Internal Error" });
    }
};

export default handler;
