import React from 'react';

export default function Pagemain() {
  return (
    <div className="flex justify-center items-center p-8 relative">
      <img src="https://s359.kapook.com/pagebuilder/f28d2217-2be7-4907-8a16-3aae7eaa2aea.jpg" alt="Description of the image" className="w-full h-[800px] shadow-md" />
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[50px] text-white">About</h1>
        <h1 className="text-[50px] font-bold text-white">Food is An important</h1>
        <h1 className="text-[50px] font-bold text-white">Part Of A Balanced Diet</h1>
      </div>
    </div>
  );
}
