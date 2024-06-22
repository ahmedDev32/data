import connectDb from "@/middleware/db"
import fs from "fs/promises"; // Use the promise-based version of fs


let handler = async(req,res)=>{

    try {
         // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
        // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
        let {name,imageUrl,price,description,category} = req.body
        let newProduct = {
            name,imageUrl,price:`$${price}`,description,category,id:name
        }
        let data = await fs.readFile("./Models/products.json","utf-8")
        let products = JSON.parse(data)
        products.push(newProduct)
        await fs.writeFile("./Models/products.json",JSON.stringify(products,null,2))

        return res.status(200).json({success:true,msg:"Product Posted",newProduct})


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,msg:"Internal Error Try Again Later"})
    }

}

export default handler
