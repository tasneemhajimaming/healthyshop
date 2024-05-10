// import React from 'react'
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className='bg-emerald-950 p-4'>
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className='text-white text-[35px]' font-semibold>HealthyFood</a>

//         <ul className='flex space-x-6 text-[20px]'>
//         <li><a href="Home" className='text-white'>Home</a></li>
//         <li><a href="Shop" className='text-white'>Shop</a></li>
//         <li><a href="Customer information" className='text-white'>Customer information</a></li>
//         <li><a href="Contact" className='text-white'>Contact</a></li>
//         </ul>

//         <button className="bg-green-600 hover:bg-blue-800 text-white text-[24px] font-bold py-2 px-4 rounded">
//       Sign-up
//       </button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className='bg-emerald-950 p-4'>
      <div className="container mx-auto flex justify-between items-center">
        {/* <div>
          <img src="path/to/your/image.jpg" alt="Logo" className="w-16 h-16" />
        </div> */}
        <div>
          <a to="/" className='text-white text-3xl font-semibold'>HealthyFood</a>
        </div>

        <ul className='flex space-x-6 text-lg'>
          <li><a to="/" className='text-white'>Home</a></li>
          <li><a to="/shop" className='text-white'>Shop</a></li>
          <li><a to="/customer-information" className='text-white'>Customer information</a></li>
          <li><a to="/contact" className='text-white'>Contact</a></li>
        </ul>

        <button onClick={togglePopup} className="bg-green-600 hover:bg-blue-800 text-white text-lg font-bold py-2 px-4 rounded">
          Sign-up
        </button>
      </div>
      
      {showPopup && (
        <div className="fixed top-0 right-0 w-full h-full z-10 bg-black bg-opacity-50">
        <div className="bg-white p-8 w-[400px] rounded-lg absolute top-0 right-80 mt-14">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 justify-center items-center">Sign Up</button>
              {/* <button onClick={togglePopup} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Close</button> */}
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
