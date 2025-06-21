import mongoose from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    pass: {
      type: String,
      required: true
    }
  },
  { timeStamps: true }
); //mongoose timeStampt give us two time fields createdAt and updatedAt

export const User = mongoose.model("User", userSchema);
