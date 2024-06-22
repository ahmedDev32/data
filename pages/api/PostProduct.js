import fs from 'fs/promises';
import path from 'path';
import Products from '@/Models/PostProduct'; // Adjust the import path based on your actual model location

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (adjust as needed)
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

    // Create a new instance of Products model
    const newProduct = new Products({
      name,
      imageUrl,
      price: `$${price}`, // Assuming you want to prepend $ to price
      description,
      category,
      id: name // Assuming 'name' is unique and you want to use it as 'id'
    });

    // Save the product to the database
    await newProduct.save();

    return res.status(200).json({ success: true, msg: 'Product Posted', newProduct });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, msg: 'Internal Error, Try Again Later', error: error.message });
  }
};

export default handler;
