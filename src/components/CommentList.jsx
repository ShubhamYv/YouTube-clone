import React from 'react';
import CommentsCard from './CommentsCard';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments?.map((item) => (
        <div key={item.userId} className="mb-4">
          <CommentsCard comment={item} />
          {item.replies.length > 0 && (
            <div className="ml-5">
              <CommentList comments={item.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentList;
