import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, openMenu } from '../store/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChatBox from './LiveChatBox'

const WatchPage = () => {

  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(closeMenu())
    return () => {
      dispatch(openMenu())
    }
  }, [dispatch])

  return (
    <div className="flex flex-row mt-[6%]">
      <div className='flex flex-col mx-12 max-w-[920px]'>
        <div className='-my-2'>
          <iframe width="900" height="480"
            className='rounded-2xl'
            src={"https://www.youtube.com/embed/" + searchParams.get('v')}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>

        <div className='mt-10'>
          <CommentContainer />
        </div>
      </div>

      <div className='flex flex-col max-h-[590px] border border-black bg-gray-200 w-full -mt-2 mr-16 rounded-2xl'>
        <LiveChatBox />
      </div>
    </div>

  )
}

export default WatchPage
