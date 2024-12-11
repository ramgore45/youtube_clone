import React from 'react'

const Button = ({btnText}) => {
  return (
    <div className=' bg-gray-300 w-fit px-3 p-1 rounded-lg text-white cursor-pointer
        hover:bg-black transition-all ease-in-out duration-300
    '>
        {btnText}
    </div>
  )
}

export default Button