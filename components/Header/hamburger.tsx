import { Menu } from 'lucide-react'
import React from 'react'

function Hamburger() {
  return (
    <div className='border rounded-full p-2 lg:hidden block'>
        <Menu size={20} strokeWidth={1.5} />
    </div>
  )
}

export default Hamburger