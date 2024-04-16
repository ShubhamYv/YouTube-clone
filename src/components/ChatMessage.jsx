import { Avatar } from '@mui/material'
import React from 'react'

const ChatMessage = ({ name, message, image }) => {
  return (
    <div className='flex m-3 mx-5 gap-4'>
      <Avatar
        src={image}
        style={{ width: '30px', height: '30px' }}
      />
      <p>
        <span className='font-semibold'>{name}</span>
        <span className='mx-2'>{message}</span>
      </p>
    </div>
  )
}

export default ChatMessage
