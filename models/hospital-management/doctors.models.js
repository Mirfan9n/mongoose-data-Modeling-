
import mongoose from "mongooss"

const doctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  salary: {
   type: Number,
   qualifications:{
    type: String,
    required: true,
   } ,
   experienceInYears:{
    type: Number,
    required: true,
    default: 0
   },
   worksInHospiitals: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: "hospital"
     },
   ],
   
  }
},{timestamps: true})

export const doctor = mongoose.model("doctor", doctorSchema)