import React, { useState } from 'react'
import axios from "axios"
const Create = () => {
  const [task,setTask]=useState()
const handleAdd=()=>{
  axios.post("http://localhost:3000/add",{task:task})
  .then((res)=>{console.log(res);
  })
  .catch((err)=>{console.log(err);
})}
  return (
    <div className='flex justify-center items-center'>
        <input type="text" name="" id="" className='border border-black
         justify-center items-center' onChange={(e)=>{setTask(e.target.value)}}/>
        <button className='border border-black bg-black text-white rounded' onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Create