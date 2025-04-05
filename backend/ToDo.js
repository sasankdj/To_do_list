import mongoose from "mongoose";
const TodoSchema=new mongoose.Schema({
    task:String
})
const Todomodel=mongoose.model("todos",TodoSchema)
export default Todomodel