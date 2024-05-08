import React from 'react'

function Navbar() {
  return (
    <nav className='bg-blue-300 p-4'>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className='text-white text-2xl' font-semibold>HealthyFood</a>

        <ul className='flex space-x-4'>
        <li><a href="#" className='text-white'>Home</a></li>
        <li><a href="#" className='text-white'>Shop</a></li>
        <li><a href="#" className='text-white'>ManageEmployee</a></li>
        <li><a href="#" className='text-white'>About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
