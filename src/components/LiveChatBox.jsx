import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatSlice';
import { generateRandomChatData } from '../utils/generateRandomChatData';
import SendIcon from '@mui/icons-material/Send';

const LiveChatBox = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState()

  useEffect(() => {
    // API Pooling
    const interval = setInterval(() => {
      const data = generateRandomChatData();
      dispatch(addMessage({
        name: data?.author,
        message: data?.quote,
        image: data?.imageUrl
      }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const submitFormHandler = (e) => {
    e.preventDefault()
    dispatch(addMessage({
      name: "Current User",
      message: liveMessage,
      image: "https://cdn.pixabay.com/photo/2024/02/05/03/10/sun-8553511_640.jpg"
    }));
    setLiveMessage("")
  }

  return (
    <div className='flex flex-col h-full overflow-hidden'>
      <div className='flex justify-between items-center bg-gray-100 p-3 rounded-md'>
        <p className='font-bold'>Live Chat</p>
        <MoreVertIcon />
      </div>
      <div className='flex-grow overflow-y-scroll'>
        {chatMessages.map((item, index) => (
          <ChatMessage
            key={index}
            name={item?.name}
            message={item?.message}
            image={item?.image}
          />
        ))}
      </div>
      <form className='flex items-center p-2' onSubmit={submitFormHandler}>
        <input
          type="text"
          className='flex-grow px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none'
          placeholder='Chat...'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full bg-gray-500'>
          <button onClick={() => console.log(liveMessage)} >
            <SendIcon />
          </button>
        </div>
      </form>
    </div >
  );
}

export default LiveChatBox;
