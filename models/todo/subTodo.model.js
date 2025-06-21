import mongoose from "mongoose";

const subTodoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    createdBy: {
      tyep: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },

  { timeStamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
