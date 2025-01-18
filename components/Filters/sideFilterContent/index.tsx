import { cn } from '@/lib/utils'
import React from 'react'

const SideFilterContent = ({className}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(className, 'border rounded-2xl py-5 px-4')}>SideFilterContent</div>
  )
}

export default SideFilterContent