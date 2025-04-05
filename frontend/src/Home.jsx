import React, { useEffect, useState } from 'react'
import Create from './Create';
import axios from 'axios';
const Home = () => {
  const [todo ,addtodo]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/get")
    .then((result)=>{addtodo(result.data)})
    .catch((err)=>{console.log(err);
    })
  },[])
  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-100 p-6'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>📝To do list</h1>
        <Create></Create>
        {   todo.length===0 ? <div>
            <h2 className='text-3xl flex justify-center items-center'>No data found</h2>
        </div>:
            todo.map((todo)=>(
                <div key={todo._id} className='flex justify-center items-center w-[200px] p-2 bg-gray-200 m-2 rounded'>
                    {todo.task}
                </div>
            ))
        }
    </div>
  )
}

export default Home