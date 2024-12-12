import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {

  return (
    <div className='space-y-2 w-full'>
        {comments[0] !== undefined &&
            comments?.map((comment,index)=>
                <Comment key={index} comment={comment}/>
            )
        }
    </div>
  )
}

export default CommentList