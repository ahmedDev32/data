import React, { useState } from 'react';
import axios from 'axios';
import { MdShoppingCart, MdAttachMoney, MdDescription, MdCategory, MdImage } from 'react-icons/md';

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    let [products,setProducts] = useState({
        name :"",
        price:0,
        description:"",
        category:""
    })
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChangeImage = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!selectedFile) {
          console.error('Please select a file.');
          return;
        }
    
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'f5ni8bza'); // Replace 'your_upload_preset' with your Cloudinary upload preset
         console.log(formData);
        try {
          const response = await fetch('https://api.cloudinary.com/v1_1/ds9sben9e/image/upload', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          console.log("nfjwejfj");
          console.log(data);
          if (data && data.secure_url){
            let objectForProduct = {
                name : products.name,
                description:products.description,
                category : products.category,
                price : products.price,
                imageUrl : data.secure_url
            }


            let response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/PostProduct`,objectForProduct)
            if(response&&response.data&&response.data.success){
                alert(response.data.msg)
            }else if(response&&response.data&&response.data.success===false){
                alert(response.data.msg)
            }else{
                alert("Some Issue Happened")
            }
          }
          console.log(data.secure_url); // URL of the uploaded image on Cloudinary
        } catch (error) {
          console.error('Error uploading image: ', error);
        }
        
    };

    let HandleChange = async(e)=>
        {
            let {name,value} = e.target
            setProducts({
                ...products,
                [name] : value
            })
            console.log(products);
        }
            // List of categories
    const categories = [
      "Eyelash Tweezers", "Paper Coated Tweezers", "Fiber Tip Tweezers",
      "Cuticle Nipper", "Nail Pincher", "Nail Pusher",
      "Manicure Pedicure Kits", "Shaving kits", "Shaving Bowls & Brush","Needle Holder",
      "Mouth Mirrors", "Dental Curettes", "Eyelash Applicators",
      "Eyelash & Eyebrow Scissors", "Mirrors for Eyelash Extensions",
      "Eyebrow Tweezers", "Lash Lifting Tools", "Packaging",
      "Hair Cutting Scissors", "Thinning Scissors", "Double Edge Safety Razor","Retractors","Diagnostics",
      "Shaving Razors", "Finger Razors", "Eyelash Applicators" , "ORTHOPEDIC INSTRUMENTS" , "Scissors", "Dental Instruments","Cardiovascular", "Gynecology"
  ];


    return (
        <div className="flex justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit} >
      <div className="bg-white shadow-md rounded-md p-8 w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Product</h1>
        <div className="mb-4 flex items-center">
          <MdShoppingCart className="text-gray-400 mr-2" />
          <input
            type="text"
            name='name'
            onChange={HandleChange}
            value={products.name}
            placeholder="Name"
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <MdAttachMoney className="text-gray-400 mr-2" />
          <input
            type="text"
            value={products.price}
            onChange={HandleChange}
            name='price'
            placeholder="Price"
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <MdDescription className="text-gray-400 mr-2" />
          <input
            type="text"
            value={products.description}
            onChange={HandleChange}
            placeholder="Description"
            name = "description"
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
                        <MdCategory className="text-gray-400 mr-2" />
                        <select
                            value={products.category}
                            onChange={HandleChange}
                            name="category"
                            required
                            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
        <div className="mb-4 flex items-center">
          <MdImage className="text-gray-400 mr-2" />
          <input
            type="file"
            onChange={handleChangeImage}
            placeholder="Image"
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-6 hover:px-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}


export default Dashboard;
