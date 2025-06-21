import mongoose from "mongoose";
const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    diagonsedWith: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    blodGroup: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Third-Gender"]
    },
    admitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true
    }
  },
  { timeStamps: true }
);
export const Patient = mongoose.model("Patient", patientSchema);
