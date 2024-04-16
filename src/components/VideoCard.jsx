import React from 'react';
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { formatToTimeAgo, formatViewCount, truncateTitle } from '../utils/helperFunctions';

const VideoCard = ({ item }) => {
  const { channelTitle, thumbnails, title, publishedAt } = item?.snippet;
  const { viewCount } = item?.statistics;


  return (
    <div className="h-[320px] w-[375px] rounded-2xl bg-white overflow-hidden shadow-2xl">
      <img
        className="h-[200px] w-full object-cover rounded-t-2xl"
        src={thumbnails?.high?.url}
        alt="card_image"
      />
      <div className="flex items-center justify-between p-4 py-1">
        <div className="flex items-center space-x-4 ">
          <Avatar />
          <div>
            <p className="font-bold">{truncateTitle(title, 40)}</p>
            <p className="font-semibold">{channelTitle}</p>
            <p>{formatViewCount(viewCount)} views . {formatToTimeAgo(publishedAt)}</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default VideoCard;
