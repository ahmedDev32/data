import fs from "fs/promises"; // Use the promise-based version of fs
import ProductsModel from "../../Models/PostProduct";

const handler = async (req, res) => {
  // Set CORS headers to allow all origins
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
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
    console.error("Error reading products.json:", err);
    return res.status(500).json({ success: false, msg: "Internal Error" });
  }
};

export default handler;
