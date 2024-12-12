import React from 'react'
import CommentList from './CommentList'

const commentsData = [
    {
        name:"Rama",
        text:'This text is the comments over the Video',
        replies:[
            {
                name:"Rama",
                text:'This text is the comments over the Video',
                replies:[
                    {
                        name:"Rama",
                        text:'This text is the comments over the Video',
                        replies:[
                            {
                                name:"Rama",
                                text:'This text is the comments over the Video',
                                replies:[
                                    {
                                        name:"Rama",
                                        text:'This text is the comments over the Video',
                                        replies:[
                                            {
                                                name:"Rama",
                                                text:'This text is the comments over the Video',
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                name:"Rama",
                                text:'This text is the comments over the Video',
                                replies:[
                                    {
                                        name:"Rama",
                                        text:'This text is the comments over the Video',
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name:"Rama",
        text:'This text is the comments over the Video',
        replies:[
            {
                name:"Rama",
                text:'This text is the comments over the Video',
                replies:[
                    {
                        name:"Rama",
                        text:'This text is the comments over the Video',
                        replies:[
                            {
                                name:"Rama",
                                text:'This text is the comments over the Video',
                                replies:[
                                    {
                                        name:"Rama",
                                        text:'This text is the comments over the Video',
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name:"Rama",
        text:'This text is the comments over the Video',
        replies:[
            {
                name:"Rama",
                text:'This text is the comments over the Video',
            },
        ]
    }
]

const CommentsContainer = () => {

  return (
    <div className='w-full mt-5'>
        <h3 className='text-2xl font-bold'>Comments :</h3>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer