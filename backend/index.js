import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import {mongodb,PORT} from "./config.js"
import Todomodel from "./ToDo.js"
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect(mongodb)

app.post("/add",(req,res)=>{
    const task=req.body.task;
    Todomodel .create({task:task})
    .then((result)=>{res.json(result)})
    .catch((err)=>{res.json(err)})
})

app.get("/get",(req,res)=>{
    Todomodel.find()
    .then((result)=>{res.json(result)})
    .catch((res)=>{res.json(err)}) 
})

app.listen(PORT,()=>{
    console.log("listening on "+PORT);
    
})
