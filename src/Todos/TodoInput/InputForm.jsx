import React, { useState } from 'react'
import TodoCategories from '../TodoCategories/TodoCategories'
import { Button } from 'antd'
import TodoList from '../TodoList/TodoList'
import Footer from '../Footer/Footer'

const InputForm = () => {
const [todoValue, setTodoValue] = useState('')
const [err,setErr]= useState('')
  
const handleClick =(e)=> {
   e.preventDefault()
    if(todoValue === " ") {
   setErr('Please write your task!');
  }else {
   setTodoValue('')
  }

  }
  return (

<div className=' w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t bg-slate-600 text-white px-4 flex flex-col gap-10 justify-center items-center'>
      <div className='w-[850px] h-full bg-bodyColor p-10 flex flex-col gap-10 bg-slate-500'>
    <div className='w-[100%] flex items-center justify-between gap-4 h-12 '>
    <input onChange={(e)=>setTodoValue(e.target.value)} className='w-[200%] h-full bg-slate-800 border-[1px] text-white py-2 px-4 placeholder:text-sm tracking-wide rounded-md outline-none hover:border-red-300 hover:text-red-200' placeholder='Enter your Todo...'/>
    <TodoCategories/>
    </div>
    <Button onClick={handleClick} className='h-10'>Add Todo</Button>
    <div className=' flex flex-col gap-4'>
      <ul className='grid grid-cols-1 gap-4 p- border rounded-md  '>
     <TodoList/> 
      </ul>
    </div>
    <Footer/>
    </div>
      </div>

   
    )
}

export default InputForm