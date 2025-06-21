import mongoose from "mongoose";

const orderItemsSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  }
});
const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    orderItems: {
      type: [orderItemsSchema]
    },
    address: {
      type: String
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING"
    }
  },
  { timeStamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
