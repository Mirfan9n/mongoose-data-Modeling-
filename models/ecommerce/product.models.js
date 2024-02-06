import mongoose, { model } from "mongoose"

const productSchema = mongoose.Schema({
  description:{
    required: true,
    type: String,
  },
  name:{
    type: String,
    required: true
  },
  productImage:{
    type: String,  //url is a string
    // required : true
  },
  price:{
    type: Number,
    default: 0,
  },
  stock:{
    default:0,
    type: Number
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true;
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{timestamps: true})

export const Product = mongoose.model("Product",productSchema)