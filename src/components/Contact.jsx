import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 bg-gray-600 rounded-[8px]">
      <h1 className="text-3xl text-white font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-white mb-4">We'd love to hear from you! Contact us using the information below:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <p className="text-gray-700">123 Main Street</p>
          <p className="text-gray-700">City, State, ZIP</p>
          <p className="text-gray-700">Country</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Email: healthyfood@gmail.com</p>
        </div>
      </div>
      
      <form className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-[20px] font-semibold py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
}
