import React from 'react'
import Profile from '../../../assets/Header/Mini.png';
import { CiMenuKebab } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import Img from '../../../assets/Banner/Aw_ICPC.jpg';
import Data from './data';
export default function Post() {
  return (
    <div>
    {
        Data.map(data => {
            return (
                <div className="bg-[#202122] p-3 rounded-lg mb-5" key={data.id}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <img className='' src={Profile}/>
                        <div className="">
                            <div className="flex gap-1">
                                <p className='text-md font-semibold'> {data.name}.</p>
                                <p className='text-md font-semibold text-[#5AA7FF]'>Follow</p>
                            </div>
                            <div className="flex gap-1 items-center">
                            <p className='text-sm text-[#B0B3B8]'>{data.time} Days Ago.</p>
                            <BiWorld />
                            </div>
                        </div>
                    </div>
                <div className="flex gap-5"> 
                    <CiMenuKebab className='rotate-90 scale-150'/>
                    <TbXboxX className='scale-150' />
                </div>
                </div>
        
                <div className="mt-4 text-[15px]">
                   {data.text}
                </div>
        
                <div className="mt-3">
                    <img src={Img}/>
                </div>
              </div>
            )
        })
    }
    </div>
  )
}
