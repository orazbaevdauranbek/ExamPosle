import React from 'react'
import { ImSpinner9 } from 'react-icons/im';
const Error = ({errTodo}) => {
  return (
    <div className='absolute font-titleFont font-medium text-lg top-2 left-[40%] px-6 py-2 rounded-md border-b-[6px] border-b-red-500 text-red-500'>
        <p className='flex items-center gap-4'>
        <span className='text-xl animate-spin' ><ImSpinner9/></span>{errTodo}
        </p>
    </div>
  )
}

export default Error