import React, { useEffect } from 'react'
import { YOU_TUBE_POPULAR_VIDEOS_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../store/slices/videoSlice'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideosContainer = () => {

  const dispatch = useDispatch()
  const popularVideos = useSelector((store)=>store.videos.popularVideos)

  const getVideosHandler = async ()=>{
    try{
      const data = await fetch(YOU_TUBE_POPULAR_VIDEOS_URL)
      const result = await data.json()
      dispatch(getPopularVideos(result.items))
    }catch(error){
      console.log("Get videos failed", error)
    }
  }

  useEffect(()=>{
    getVideosHandler()
  },[])

  return (
    <div >
      <div className='flex gap-x-5 flex-wrap '>
        {popularVideos &&
          popularVideos.map((video)=>
            <Link  key={video.id} to={`/watchvideo/${video.id}`}>
              <VideoCard video={video}/>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default VideosContainer