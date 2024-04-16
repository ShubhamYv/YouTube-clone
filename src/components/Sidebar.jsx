import React from 'react'
import SidebarCard from './SidebarCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return isMenuOpen && (
    <div className='w-[20vw] bg-inherit'>
      <ul className='mx-10'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      <br />

      {
        ["Subscriptions", "Explore", "More From YouTube"].map((item, index) => (
          <div className='mx-10' key={index}>
            <SidebarCard name={item} />
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar
