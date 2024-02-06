import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email : {
    type: String,
    uniqe: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  isactive : Boolean ,
},{
  timestamps: true,
})

export const User = mongoose.model("User", userSchema)