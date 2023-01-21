import Post from "../posts/Post";
import Sugssion from "../Sugssion/Sugssion";


import React from 'react'

const LandingPage = () => {
  return (
    <div className="flex justify-center ">
    <div className='posts h-screen overflow-hidden overflow-y-scroll no-scrollbar 	'>
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
    </div>
    <div className='suggsion hidden md:block bg-slate-100'> <Sugssion /> </div>
    </div>
  )
}

export default LandingPage

