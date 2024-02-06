import mongoose from "mongoos"

const todoSchema = new mongoose.schema({
  content: {
    type: String,
    required: true,
  },
  complete:{
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTodo"
    }
  ]
 },{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)  