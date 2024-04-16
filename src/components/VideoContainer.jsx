import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    setVideos(json?.items)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className='flex flex-row flex-wrap gap-3'>
      {
        videos.map((item) => (
          <Link to={"/watch?v=" + item?.id} key={item.id}>
            <VideoCard item={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer
