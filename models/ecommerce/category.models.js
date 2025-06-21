import mongoose from "mongoose";
const categorySchema = new Schema({}, { timeStamps: true });

export const Category = mongoose.model("Category", categorySchema);
