import React from 'react'

const SingleVideo = ({videoId}) => {
  return (
    <iframe 
        className='rounded-xl'
        width="1050" 
        height="550" 
        src={"https://www.youtube.com/embed/"+videoId} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowFullScreen
    ></iframe>
  )
}

export default SingleVideo;