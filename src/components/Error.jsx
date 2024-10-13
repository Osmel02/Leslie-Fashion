import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='text-xl font-bold bg-red-700 rounded-md shadow-md p-2 uppercase text-white '>{mensaje}</div>
  )
}

export default Error