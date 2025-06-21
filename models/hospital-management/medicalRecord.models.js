import mongoose from "mongoose";
const medicalRecordSchema = new Schema({}, { timeStamps: true });
export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
