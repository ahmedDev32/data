import mongoose from "mongoose";
import connectDb from "@/middleware/db"
import PostProduct from "../../Models/PostProduct";

let handler = async(req,res) =>{
try {
    let products = await PostProduct.find({})
    return res.status(200).json({products})
}
catch (error) {
    return res.status(500).json({success:false,msg:"Internal Error Occured"})
}
}

export default connectDb(handler);
