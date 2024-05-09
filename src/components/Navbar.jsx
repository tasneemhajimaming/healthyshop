import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-emerald-950 p-4'>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className='text-white text-[35px]' font-semibold>HealthyFood</a>

        <ul className='flex space-x-6 text-[20px]'>
        <li><a href="Home" className='text-white'>Home</a></li>
        <li><a href="Shop" className='text-white'>Shop</a></li>
        <li><a href="Customer information" className='text-white'>Customer information</a></li>
        <li><a href="Contact" className='text-white'>Contact</a></li>
        </ul>

        <button className="bg-green-600 hover:bg-blue-800 text-white text-[24px] font-bold py-2 px-4 rounded">
      Sign-up
      </button>
      </div>
    </nav>
  )
}

export default Navbar
