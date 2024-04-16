import React from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Body = () => {
  const location = useLocation();
  const path = location.pathname;
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className='flex flex-row overflow-hidden'>
      <div
        className={`fixed top-[64px] left-0 h-full overflow-hidden
        ${path === '/' && isMenuOpen ? 'w-[20%]' : ''}`}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}
      >
        <div className='mt-3'>
          <Sidebar />
        </div>
      </div>

      <div className={path === '/' && isMenuOpen ? "ml-[22%] w-[78%]" : 'mx-5 w-[100%]'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
