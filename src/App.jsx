import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home'
import Video from './components/Navbar/Video'
import Market from './components/Navbar/Market'
import Community from './components/Navbar/Community'
import Game from './components/Navbar/Game'
import Dot from './components/Navbar/Dot';
import Messenger from './components/Navbar/Messenger';
import Notification from './components/Navbar/Notification';
import Profile from './components/Navbar/Profile';

function App() {
  const router =  createBrowserRouter(
    [
      {
        path : "/",
        element:<><Navbar/><Home/></>
      },
      {
        path : "/Video",
        element:<><Navbar/><Video/></>
      },
      {
        path : "/Market",
        element:<><Navbar/><Market/></>
      },
      {
        path : "/Community",
        element:<><Navbar/><Community/></> 
      },
      {
        path : "/Notification",
        element:<><Navbar/><Notification/></>
      },
      {
        path : "/Messenger",
        element:<><Navbar/><Messenger/></> 
      },
      {
        path : "/Profile",
        element:<><Navbar/><Profile/></> 
      },
      {
        path : "/Dot",
        element:<><Navbar/><Dot/></> 
      },
      {
        path : "/Game",
        element:<><Navbar/><Game/></> 
      },
     

    ]
  )
  
  return (
    <div className="">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
