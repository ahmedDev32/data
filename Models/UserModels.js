import mongoose from "mongoose";

let userModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps:true})

mongoose.models = {}

let Users = new mongoose.model("User",userModel)
export default Users