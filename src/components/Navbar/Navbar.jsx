import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/navabr/Home.png'
import Game from '../../assets/navabr/Game.png'
import Market from '../../assets/navabr/Market.png'
import Video from '../../assets/navabr/Video.png'
import Community from '../../assets/navabr/Community.png'
import Dot from '../../assets/navabr/9Dot.png'
import Messenger from '../../assets/navabr/Messenger.png'
import Notification from '../../assets/navabr/Notification.png'
import Profile from '../../assets/navabr/Profile.png'
import Fb from '../../assets/navabr/FB-Logo.png' 
import { CiSearch } from "react-icons/ci";
export default function Navbar() {
  return (
    <div className='flex justify-between px-5 py-3 bg-[#222222] sticky top-0 border-b border-gray-600'>

       <div className="flex w-max items-center lg:gap-5 gap-3  justify-between">

        <img className='' src={Fb}/>
        <div className="xl:hidden bg-[#3a3939] p-[13px] rounded-full">
        <CiSearch className='' />
        </div>

        <input className=' hidden py-2 px-4 rounded-full bg-[#3a3939] border-none outline-none text-white xl:flex' placeholder='Search Facebook'></input>
      </div>

      
      <ul className='md:flex gap-8 justify-between lg:gap-16 items-center hidden'>
        <li>
        <Link to="/"> <img className='' src = {Home}/> </Link>
        </li>

        <li>
          <Link to="/Video"><img className='' src = {Video}/></Link>
        </li>

        <li>
          <Link to="/Market"><img className='' src = {Market}/></Link>
        </li>

        <li>
          <Link to="/Community"><img className='' src = {Community}/></Link>
        </li>

        <li>
          <Link to="/Game"><img src = {Game}/></Link>
        </li>
        
      </ul>

      <ul className='flex items-center lg:gap-5 gap-3 justify-between'>
        <li>
        <Link to="/Dot"> <img className='' src = {Dot}/> </Link>
        </li>

        <li>
          <Link to="/Messenger"><img className='' src = {Messenger}/></Link>
        </li>

        <li>
          <Link to="/Notification"><img className='' src = {Notification}/></Link>
        </li>

        <li>
          <Link to="/Profile"><img className='' src = {Profile}/></Link>
        </li>

      </ul>
    

    </div>
  )
}
