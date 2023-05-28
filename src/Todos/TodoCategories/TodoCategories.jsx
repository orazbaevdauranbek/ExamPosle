import React from 'react'

const TodoCategories = () => {
  const options = [
    {
      _id: 1000,
      title:'categories',
    },
    {
      _id: 1001,
      title:'personal',
    },
    {
      _id: 1002,
      title:'business',
    },
    {
      _id: 1003,
      title:'others',
    },
    
  ];
  return (
    <div className='w-full h-full relative'>
        <select className='w-[100%] h-full bg-slate-800 border-[1px] text-white py-2 px-4 placeholder:text-sm tracking-wide rounded-md outline-none hover:border-red-300 hover:text-red-300'>
        {
          options.map((item)=> (
            <option key={item._id}>
              {item.title}
              </option>
          ))
          
        }
        </select>

    </div>
  )
}

export default TodoCategories