import mongoose from "mongoose"

 const subTodoschema = new mongoose.Schema({
   content:{
     type: String,
     required: true,
   },
   complete:{
     type: Boolean,
     default: false,
   },
   createdBy:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Todo"
   }
 },{timestamps: true})

 export const subTodo = mongoose.model("subTodo", subTodoschema)