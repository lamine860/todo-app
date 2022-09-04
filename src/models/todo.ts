import { model, Schema } from "mongoose";
import { ITodo } from "../types/todo";

const todoSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ITodo>("Todo", todoSchema);
