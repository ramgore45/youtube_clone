import React, { useState } from 'react'
import CommentList from './CommentList'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const Comment = ({comment}) => {

    const [showComments, setShowComments] = useState()

  return (
    <div className='bg-gray-50 rounded-lg w-full mt-1'>
        <div className='flex gap-x-2 border w-fit p-2 bg-gray-200 border-gray-400 rounded-md'>
            <img  className='h-10 w-10 self-center' 
                src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' 
                alt='user'
            />
            <div >
                <p className='tetx-lg'>{comment.name}</p>
                <p>{comment.text}</p>
            </div>
        </div>

        {comment.replies && 
            <button className='flex gap-x-2'
                onClick={()=>setShowComments(!showComments)}
            >
                <span>{!showComments?'Show ':'Hide '} All Reply</span>
                {!showComments ? <BiDownArrow className='self-center' />:<BiUpArrow className='self-center'/>}
            </button>
        }
        
        <div className='ml-10'>
            {showComments &&
                comment.replies && <CommentList comments={comment.replies}/>
            }
        </div>
    </div>
  )
}

export default Comment