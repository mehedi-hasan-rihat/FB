import React from 'react'
import Profile from '../../../assets/Header/Mini.png';
import Vedio from '../../../assets/AddPost/video-solid 1.png'
import Photo  from '../../../assets/AddPost/Vector.png'
import Emoji from '../../../assets/AddPost/Emoji.png'

export default function AddPost() {
  return (
    <div className='bg-[#242526] my-5 rounded-lg'>
      <div className="mx-4">

        <div className="flex pt-3">
          <img src={Profile} className='object-cover w-12' alt="" />
          <input type='text' className='rounded-full bg-[#4E4F50] px-3 text-[17px] text-[#dbd8cf] outline-none w-full mx-2' placeholder="What's on your mind?"/>
        </div>
        <div className=" border-b-gray-500 mt-3 border-b w-[96%] mx-auto"></div>

        <div className="flex justify-between py-4 px-7">
          <div className="flex items-center gap-3">
            <img src={Vedio}/>
            <p className='text-sm md:text-base'>Live Vedio</p>
          </div>

          <div className="flex items-center gap-3">
          <img src={Photo}/>
          <p className='text-sm md:text-base'>Photo/video</p>
          </div>

          <div className="flex items-center gap-3">
          <img src={Emoji}/>
          <p className='text-sm md:text-base'>Feeling/activity</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
