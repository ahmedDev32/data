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

    if (!name || !imageUrl || !price || !description || !category) {
      return res.status(400).json({ success: false, msg: 'Missing required fields', body: req.body });
    }

    const newProduct = {
      name,
      imageUrl,
      price: `$${price}`,
      description,
      category,
      id: name,
    };

    const filePath = path.resolve('./Models/products.json');
    
    let data;
    try {
      data = await fs.readFile(filePath, 'utf-8');
    } catch (readError) {
      console.error('Error reading file:', readError);
      return res.status(500).json({ success: false, msg: 'Error reading file', body: req.body });
    }

    let products;
    try {
      products = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return res.status(500).json({ success: false, msg: 'Error parsing JSON data', body: req.body });
    }

    products.push(newProduct);

    try {
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      return res.status(500).json({ success: false, msg: 'Error writing to file', body: req.body });
    }

    return res.status(200).json({ success: true, msg: 'Product Posted', newProduct });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, msg: 'Internal Error, Try Again Later', body: req.body });
  }
};

export default handler;
