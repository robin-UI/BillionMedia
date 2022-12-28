import Post from "../posts/Post";
import Sugssion from "../Sugssion/Sugssion";


import React from 'react'

const LandingPage = () => {
  return (
    <div className="col-span-5 flex justify-center ">
    <div className=' posts h-screen overflow-hidden overflow-y-scroll no-scrollbar w-5/12	'>
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
    </div>
    <div className='suggsion bg-slate-100'> <Sugssion /> </div>
    </div>
  )
}

export default LandingPage

