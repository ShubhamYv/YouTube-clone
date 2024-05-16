import React, { useState } from 'react';
import CommentsCard from './CommentsCard';

const CommentList = ({ comments }) => {
  const [showReplies, setShowReplies] = useState(false);
  const getTotalCommentCount = (comments) => {
    let count = comments.length;
    comments.forEach((comment) => {
      count += getTotalCommentCount(comment.replies);
    });
    return count;
  };

  return (
    <>
      {comments?.map((item) => (
        <div key={item.userId} className="mb-4">
          <CommentsCard comment={item} />
          {item.replies.length > 0 && (
            <>
              <button
                className="text-blue-500 underline"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies
                  ? 'Hide Replies'
                  : `${getTotalCommentCount(item.replies)} Replies`
                }
              </button>
              {showReplies && (
                <div className="ml-5">
                  <CommentList comments={item.replies} />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentList;
