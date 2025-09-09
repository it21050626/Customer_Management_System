import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    fullname: {
        type : String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    telephoneno:{
        type: String,
        required:true
    },
    
})

const Customer = mongoose.model("Customer",CustomerSchema)

export default Customer;