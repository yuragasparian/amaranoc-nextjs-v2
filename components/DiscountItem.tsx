import React from 'react'
import { DiscountProperty } from './../db/sales';


const DiscountItem = ({id, title, description, discount}:DiscountProperty) => {
  return (
    <div style={{backgroundImage:`url(/discounts/${String(id)}.jpg)`}} className='w-full lg:h-72 h-56 bg-center bg-cover  rounded-2xl text-white overflow-hidden'>
        <div className='h-full backdrop-brightness-50 p-4 flex flex-col  gap-2 justify-center'>
        <p className='text-[5rem] font-black -my-3'>{discount}</p>
        <p className='font-bold'>{title}</p>
        <p className='font-extralight text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default DiscountItem