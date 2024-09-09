import React from 'react'
import Story from '../Banner/story/Story'
import AddPost from './AddPost/AddPost'
import Post from './AddPost/Post'
export default function Banner() {
  return (
    <div className='p-3 max-w-[605px]'>
      <Story/>
      <AddPost/>
      <Post/>
    </div>
  )
}
