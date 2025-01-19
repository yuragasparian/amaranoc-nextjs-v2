
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from 'react';

export default function Price() {
    const currencies:string[]=["AMD", "USD", "EUR", "RUB"]

  return (
    <div className="py-4 my-6 border-y">
    <div className="flex justify-between items-center">
    <span className='text-sm font-semibold py-3'>Price</span>
    <Select>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {currencies.map(curr => <SelectItem key={curr} value={curr}>{curr}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    <div className='flex justify-between items-center gap-2 py-3'>
    <Input type="number" placeholder="From" />
    <span>-</span>
    <Input type="number" placeholder="To" />
    </div>
    </div>
  )
}
