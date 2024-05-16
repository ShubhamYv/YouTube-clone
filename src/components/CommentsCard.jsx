import { Avatar } from '@mui/material';
import React from 'react';

const CommentsCard = ({ comment }) => {
  return (
    <div className='flex flex-row gap-3 p-2 mb-4 bg-zinc-100'>
      <div>
        <Avatar
          alt="User Avatar"
          src={comment?.userImage}
        />
      </div>
      <div>
        <p className='font-semibold'>@{comment?.userName}</p>
        <p className=''>{comment?.text}</p>
      </div>
    </div>
  );
};

export default CommentsCard;
