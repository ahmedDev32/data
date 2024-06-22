import fs from 'fs/promises';
import path from 'path';

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
};

const handler = async (req, res) => {
  try {
    setCorsHeaders(res);

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, msg: 'Method Not Allowed' });
    }

    // Log the request body for debugging
    console.log('Request body:', req.body);

    const { name, imageUrl, price, description, category } = req.body;

    let {name,imageUrl,price,description,category} = req.body
        let newProduct = new Products({
            name,imageUrl,price:`$${price}`,description,category,id:name
        })
        // let data = await fs.readFile("./Models/products.json","utf-8")
        // let products = JSON.parse(data)
        // products.push(newProduct)
        // await fs.writeFile("./Models/products.json",JSON.stringify(products,null,2))
        await newProduct.save()
        return res.status(200).json({success:true,msg:"Product Posted",newProduct})
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, msg: 'Internal Error, Try Again Later', body: req.body });
  }
};

export default handler;
