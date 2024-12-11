import React, { useEffect, useState } from 'react'
import { closeMenu } from '../store/slices/globalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideo } from '../store/slices/videoSlice'
import SingleVideo from './SingleVideo'
import VideoSideBar from './VideoSideBar'

const WatchVideo = () => {

    const dispatch = useDispatch()
    const video = useParams()

    const [videoDetails, setVideoDetails] = useState()

    const popularVideos = useSelector((store)=> store.videos.video)
    // console.log(popularVideos)

    // const {thumbnails, title, channelTitle} = video?.snippet


    const getSingleVideoDetails = (id)=>{
        if(popularVideos !== null){
            const data = popularVideos.filter((videoDetail)=> videoDetail.id===id)
            setVideoDetails(data)
        }else{
            return console.log('popularVideos is null, cant get videoDetails')
        }
    } 

    useEffect(()=>{
        dispatch(closeMenu())
        getSingleVideoDetails(video.id)
    },[])

    // !videoDetails == add 
    if(!video.id) return <div>No VIDEO DETAILS</div>

  return (
    <div className='m-8 flex gap-x-10'>
        <SingleVideo videoId={video.id}/>
        <VideoSideBar/>
    </div>
  )
}

export default WatchVideo