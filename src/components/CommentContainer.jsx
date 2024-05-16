import { Avatar } from '@mui/material';
import React from 'react';
import CommentList from './CommentList';
import { commentsList } from '../utils/commentsList';

const CommentContainer = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-bold text-2xl'>421 Comments</h1>
      <div className='flex flex-row gap-3 items-center'>
        <Avatar
          alt="User Avatar"
          src="https://avatars.githubusercontent.com/u/75082349?v=4"
        />
        <input
          className="border-b border-black flex-grow outline-none"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <div className="border-l-2 pl-3">
        <CommentList comments={commentsList} />
      </div>
    </div>
  );
};

export default CommentContainer;
