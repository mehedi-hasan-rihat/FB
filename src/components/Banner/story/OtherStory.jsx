import React from 'react';
import Img from '../../../assets/Header/Kumar.png';
import Profile from '../../../assets/Header/Mini.png';
import Data from './data';

export default function OtherStory() {
 
  return (
   <div className="overflow-hidden">
     <div className="flex gap-2 ">
     {
      Data.map(data =>{
        return (
        <div className='' key={data.id}>
          <div className="w-36 h-[200px] relative">
            <img className='w-full h-full object-center duration-500 hover:scale-105' src={Img} alt="Main image"/>
            <div className="avatar absolute top-0 p-2">
              <div className="w-max bg-blue-500 p-[2px] rounded-full">
                <img src={Profile} alt="Profile"/>
              </div>
            </div>
            <p className='mt-2 absolute bottom-0 p-2 px-3 font-normal text-sm'>{data.Name}</p>
          </div>
        </div>  
        )
      })
     }
    </div>
   </div>
  );
}
