import { cn } from '@/lib/utils'
import React from 'react'
import { Regions } from './regions';
import Price from './price';
import MaxPeople from './maxPeople';
import Overnight from './overnight';

const SideFilterContent = ({className}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(className, 'border rounded-2xl p-5 h-min')}>
       <p className='text-sm font-semibold py-3'>Regions</p>
      <Regions />
      <Price />
      <p className='text-sm font-semibold py-3'>Min people count</p>
      <MaxPeople />
      <p className='text-sm font-semibold pb-2 border-t pt-5'>Overnight availability</p>
      <Overnight />
    </div>
  )
}

export default SideFilterContent