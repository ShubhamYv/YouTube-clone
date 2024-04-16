import React from 'react';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';

const InnerContainer = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='top-[64px] justify-between fixed w-full bg-white z-50 pb-3'>
        <ButtonList />
      </div>

      <div className='absolute top-[120px] overflow-y-auto'>
        <VideoContainer />
      </div>
    </div>
  );
};

export default InnerContainer;
