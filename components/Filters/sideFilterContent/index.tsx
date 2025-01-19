import { cn } from '@/lib/utils'
import React from 'react'
import { Regions } from './regions';
import Price from './price';

const SideFilterContent = ({className}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(className, 'border rounded-2xl p-5')}>
       <p className='text-sm font-semibold py-3'>Regions</p>
      <Regions />
      <Price />
    </div>
  )
}

export default SideFilterContent