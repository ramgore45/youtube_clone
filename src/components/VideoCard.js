import React from 'react'

const VideoCard = ({video}) => {

    const {thumbnails, title, channelTitle} = video.snippet

  return (
    <div className='w-60'>
        <img className='w-full'
            src={thumbnails?.default?.url || thumbnails?.standard?.url}
            alt='thumbnail-img'
        />
        <p className=''>{title}</p>
        <h3 className='text-lg font-bold p-1'>{channelTitle}</h3>
    </div>
  )
}

export const VideoCardHO =({info})=>{
  return <VideoCard info={info}/>
}

export default VideoCard