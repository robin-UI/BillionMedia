import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { IoChatbubbleOutline } from "react-icons/io5"
import { FaPaperPlane } from "react-icons/fa"
import { BsBookmark } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import profile from "./profile.jpg"

const Post = () => {
    let str = "Start editing to see some magic happen!"
    let [discription, setDiscription] = useState(str.slice(0, 20))
    let viewMore = (e) => {
        discription.length < 21 ? setDiscription(str) : setDiscription(discription.slice(0, 20))
        discription.length < 21 ? e.target.innerText = "viewLess..." : e.target.innerText = "viewMore..."
    }
    return (
        <>
            <div className="p-7 mb-4 bg-slate-300 mr-4">
                <div className="mb-3 flex justify-between">
                    <div className="flex items-center">
                        <div className="mr-2 h-10 w-10 ">
                            <img src={profile} alt="profile-pic" className='rounded-full '/>
                        </div>
                        <h2>Username . <span className="text-xs font-thin">2dh</span></h2>
                    </div>
                    <div className=""><BiDotsHorizontalRounded /></div>
                </div>
                <div className="h-96 w-full bg-slate-400 mb-3"></div>
                <div>
                    <div className="flex justify-between mb-2">
                        <div className="flex">
                            <div className="mr-2 h-7 w-7 "> <AiOutlineHeart /> </div>
                            <div className="mr-2 h-7 w-7 "> <IoChatbubbleOutline /> </div>
                            <div className="mr-2 h-7 w-7 "> <FaPaperPlane /> </div>
                        </div>
                        <div className="mr-2 h-7 w-7 "><BsBookmark /></div>
                    </div>
                    <div>
                        <p>23k likes</p>
                        <p>Araon kumar <span className="text-xs from-neutral-50"> We are hear</span></p>
                        <p className="text-yellow-50 text-sm"> {discription} <span 
                                className='viewMore text-slate-500' 
                                onClick={viewMore}>
                                viewMore...
                            </span> 
                        </p>
                        <p className="text-slate-700">View all 30 commends</p>
                        <input className="border border-b-slate-400 w-full h-8" placeholder="Add a commint hear" type="text" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Post