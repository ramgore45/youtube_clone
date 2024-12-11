import React from 'react'

const VideoCard = ({video}) => {

    const {thumbnails, title, channelTitle} = video.snippet

  return (
    <div className='w-[19%]'>
        <h3 className='text-xl font-bold p-1'>{channelTitle}</h3>
        <img className='w-full'
            src={thumbnails?.default?.url || thumbnails?.standard?.url}
            alt='thumbnail-img'
        />
        <p className=''>{title}</p>
    </div>
  )
}

export default VideoCard