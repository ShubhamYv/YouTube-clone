import React from 'react';

const SidebarCard = ({ name }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-xl font-bold'>{name}</h2>

      <div className='flex flex-row gap-3 items-center'>
        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
        <p>Your Channel</p>
      </div>

      <div className='flex flex-row gap-3 items-center'>
        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
        <p>History</p>
      </div>

      <div className='flex flex-row gap-3 items-center'>
        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
        <p>Your Videos</p>
      </div>

      <div className='flex flex-row gap-3 items-center'>
        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
        <p>Watch Later</p>
      </div>

      <div className="border-t border-gray-800 my-2"></div>
    </div>
  );
};

export default SidebarCard;
