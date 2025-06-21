import mongoose from "mongoose";
const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      required: true
    },
    qualification: {
      type: String,
      required: true
    },
    experienceInYear: {
      type: String,
      default: 0
    },
    workInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
      }
    ]
  },
  { timeStamps: true }
);
export const Doctor = mongoose.model("Doctor", doctorSchema);
