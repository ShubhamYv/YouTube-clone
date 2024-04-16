import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/appSlice';
import { cachedResults } from '../store/searchSlice';


const Head = () => {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState([])

  // const searchCache = useSelector(store => store.search.cachedResults)

  // // fetch searchedList from api
  // const fetchSearchedList = async () => {
  //   const data = await fetch(``);
  //   const json = await data.json();
  //   setSuggestionsList(json[1]);
  //   // update cache
  //   dispatch(cachedResults({
  //     [searchQuery]: json[1]
  //   }))
  // };


  // useEffect(() => {
  //   console.log(suggestionsList)
  //   const timer = setTimeout(() => {
  //     // if present, we will directly set
  //     if (searchCache[searchQuery]) {
  //       setSuggestionsList(searchCache[searchQuery]);
  //     }
  //     // if not present, we will do api call
  //     else {
  //       fetchSearchedList()
  //     }
  //   }, 200)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [searchQuery])

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='flex flex-row justify-between fixed top-0 left-0 w-full bg-white z-50'>
      <div className='flex gap-3 mx-10 my-3'>
        <MenuIcon
          className='cursor-pointer'
          fontSize='large'
          onClick={() => toggleMenuHandler()} />

        <a href="/">
          <img
            className='h-[50px] -mt-2'
            src="https://cdn-icons-png.freepik.com/256/1384/1384060.png"
            alt="youtube-logo"
          />
        </a>
      </div>


      <div className='mx-10 my-3'>
        <div>
          <input type="text"
            className='w-[500px] border border-gray-500 rounded-l-full p-2'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className='rounded-r-full border border-gray-500 px-6 p-2 bg-gray-300'
          >
            <SearchIcon fontSize='inherit' />
          </button>
        </div>

        {showSuggestions && (
          <div className='fixed'>
            <ul className=' bg-zinc-100 rounded-2xl w-[500px]'>
              {suggestionsList?.map((item) => (
                <li key={item.id} className='m-2 font-bold rounded-2xl hover:bg-zinc-300'>
                  🔍 {item.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex gap-3 h-10 mx-10 my-3'>
        <VideoCallIcon fontSize='large' />
        <NotificationsNoneIcon fontSize='large' />
        <Avatar fontSize='large' src='https://avatars.githubusercontent.com/u/75082349?v=4' />
      </div>
    </div>
  )
}

export default Head
