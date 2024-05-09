import { useState } from 'react';

function YourComponent() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const listMenu = [
    { title: "Order Panding", count: 5 },
    { title: "Order Cancle", count: 2 },
    { title: "Order Process", count: 12 },
    { title: "remaining", count: 20 },
    { title: "Order Today", count: 20 },
  ];

  const onMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <div className="flex flex-row gap-6 pt-6 px-6">
      {listMenu.map((list, index) => (
        <div
          key={index}
          className={`flex-grow h-44 bg-white rounded-[9px]  border-[4px] border-solid border-primary text-primary p-5 ${index !== selectedMenu && selectedMenu !== null ? 'opacity-25' : 'opacity-100'}`}
          onClick={() => onMenuClick(index)}
        >
          <p className="text-[30px] mb-10 text-black">
            {list.title}
          </p>
          <div className="flex justify-between">
            <p className="text-[50px] mb-8 mt-[-10px]">
              {list.count}
            </p>
            <p className="text-[30px] text-send-back mt-2">Order</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
