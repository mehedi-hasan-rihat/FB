import React from 'react'
import Img from '../../../assets/Header/Kumar.png'
import Add from '../../../assets/Header/Add.png'
export default function AddStory() {
  return (
    <div>
      <div className="w-36 h-[200px] relative overflow-hidden">
        <img className='w-full h-full object-center duration-500 hover:scale-105' src={Img}/>
        <div className="bg-[#202122] p-2 w-full bottom-0 rounded-b-md absolute">
            <div className=" flex items-center flex-col relative p-1">
            <img className=' absolute -top-6  duration-500 hover:scale-105' src={Add}/>
            <p className='mt-2  font-normal text-sm'>Create story</p>
            </div>
        </div>
      </div>
    </div>
  )
}
