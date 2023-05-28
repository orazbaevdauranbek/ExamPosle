import React, { useState } from 'react'

const TodoList = () => {
    const [mark, setMark] =useState(false)
    console.log(mark)
  return (
    <li onClick={()=> setMark(!mark)} className={` flex justify-between items-center w-full font-titleFont font-medium teex-base border-[1px] border-l-[6px] px-2 py-1 cursor-pointer border-slate-200 hover:text-red-200`}>Todo Item <span className='text-xl text-gray-300 hover:text-blue-400 cursor-pointer duration-300'><i class='bx bxs-trash'></i></span></li>
    )
}

export default TodoList