import { modelNames } from "mongoose"
import mongoose from "mongooss"

const medicalRecordSchema = new mongoose.Schema({
  
},{timestamps: true})

export const medicalRecord = mongoose.model("medicalRecord", medicalRecordSchema)