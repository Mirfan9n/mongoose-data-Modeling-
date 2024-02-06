
import mongoose from "mongooss"

const patientSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  diagonosedWith:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  bloodGroup:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required:true,
    enum: ["M", "F", "O"]
  },
  admittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
  }
},{timestamps: true})

export const patient = mongoose.model("patient", patientSchema)