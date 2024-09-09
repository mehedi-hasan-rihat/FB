import React from 'react'
import Img from '../../../assets/Header/Kumar.png'
import Profile from '../../../assets/Header/Mini.png'
export default function OtherStory() {
  return (
    <div>
        <div className="w-36 h-[200px] relative">

            <img className='w-full h-full object-center' src={Img}/>

            <img className='absolute top-0 p-3  border rounded-full ' src={Profile}/>
    
            <p className='mt-2 absolute bottom-0 p-2 px-3  font-normal text-sm'>Mehedi Hasan Rihat</p>
        </div>
    </div>
  )
}
