import React, {useState} from 'react'
import './style.css'
import logo from './assets/logo.png'
import profile from './assets/profile.jpg'
import { IconContext } from "react-icons";
import { GrFormSearch, GrHomeRounded } from 'react-icons/gr';
import { MdMovieCreation, MdOutlineAddBox, MdOutlineExplore } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [toggle, setToggle] = useState(true);
    const [whichToggle, setWhichToggle] = useState()

  const toggleBtn = (e) => {
    console.log(typeof e.target.id);
    if (e.target.id === "searches") {
        setWhichToggle(true)
    }else{
        setWhichToggle(false)
    }
    setToggle(toggle => !toggle)
    
  }

  let styles = { 
    borderRadius: toggle ? "0px" : "50px",
    backgroundColor: toggle ? "" : "white",
    border: toggle ? "0px" : "1px solid black",
}

    return (
        <>
            <div className="h-full flex flex-col justify-between ">
                <div className="">
                    <div className="flex relative">
                        <div className="iconField mr-3">
                            <IconContext.Provider value={{ size: "20", className: "menuIcons" }}>
                            <NavLink to='/'> 
                                <div className={`mr-1 h-8 mb-6 ${toggle ? "w-0" : "w-8"}`}><img className={`${toggle ? "disnon" : ""}`} src={logo} alt="logo"/></div>
                            </NavLink>

                            <NavLink to='/'> 
                                <div className="flex h-10 items-center justify-center menuIcons mb-3" style={styles}> <GrHomeRounded  /> </div>
                            </NavLink>
                            
                            <div id='searches' className="flex h-10 items-center justify-center menuIcons mb-3 z-30" onClick={toggleBtn} style={styles}> 
                                <GrFormSearch className='disabled' /> 
                            </div>

                            <NavLink to='/explore'>
                                <div className="flex items-center justify-center menuIcons h-10 mb-3" style={styles}> <MdOutlineExplore/> </div>
                            </NavLink>

                            <NavLink to='/reel'>
                                <div className="flex items-center justify-center menuIcons h-10 mb-3" style={styles}> <MdMovieCreation/> </div>
                            </NavLink>

                            <NavLink to='/message'>
                            <div className="flex items-center justify-center menuIcons h-10 mb-3" style={styles}> <FaPaperPlane/> </div>
                            </NavLink>
                            
                            <div id='notifaction' className="flex items-center justify-center menuIcons h-10 mb-3" onClick={toggleBtn} style={styles}> <AiOutlineHeart className='disabled'/> </div>
                            
                            <NavLink to='/create'>
                            <div className="flex items-center justify-center menuIcons h-10 mb-3" style={styles}> <MdOutlineAddBox/> </div>
                            </NavLink>

                            <NavLink to='/profile'>
                            <div className="flex mb-3 items-center menuIcons  h-10 w-10"> <img src={profile} alt="profile-pic" className='rounded-full' /> </div>
                            </NavLink>

                            <NavLink to=''>
                                <div className="flex items-center justify-center menuIcons h-10 mb-3" style={styles}> <GiHamburgerMenu/> </div>
                            </NavLink>
                            </IconContext.Provider>
                        </div>
                        <div className={`textArea ${toggle ? "" : "disnon"}`}>
                            <div className={`  items-center cursor-pointer ${toggle ? "h-8 mb-6" : "disnon h-0"}`}>
                                <h3>instagram</h3>
                            </div>
                            <NavLink to='/'>
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Home</p>
                            </div>
                            </NavLink>

                            <div className='h-10 flex items-center cursor-pointer mb-3' onClick={toggleBtn}>
                                <p className='ml-3'>Search</p>
                            </div>

                            <NavLink to='/explore'>
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Expore</p>
                            </div>
                            </NavLink>

                            <NavLink to="/reel">
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Reels</p>
                            </div>
                            </NavLink>

                            <NavLink to='/message'>
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Message</p>
                            </div>
                            </NavLink>

                            <div className='h-10 flex items-center cursor-pointer mb-3' onClick={toggleBtn}>
                                <p className='ml-3'>Notification</p>
                            </div>

                            <NavLink to="/create">
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Create</p>
                            </div>
                            </NavLink>

                            <NavLink to="/profile">
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>Profile</p>
                            </div>
                            </NavLink>

                            <NavLink>
                            <div className='h-10 flex items-center cursor-pointer mb-3'>
                                <p className='ml-3'>More</p>
                            </div>
                            </NavLink>
                        </div>
                        <div className={`textArea ${toggle ? "disnon" : ""} h-screen `}>
                            {whichToggle
                                ? <div className="search">
                                    <div className="searchText">
                                        <h1>Search</h1>
                                    </div>
                                    <div className='divide-y divide-blue-200'>
                                        <input type="text" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                                    </div>
                                    <div className="resultArea">
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                    </div>
                                    </div>
                                : <div className="notifaction">
                                    <h2>Notifaction</h2>
                                    <div className="resultArea">
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                        <div className='h-8 mt-3 bg-slate-600'></div>
                                    </div>
                                    </div>
                            }

                            {/* <div className="search">
                                <div className="searchText">
                                    <h1>Search</h1>
                                </div>
                                <div className='divide-y divide-blue-200'>
                                    <input type="text" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                                </div>
                                <div className="resultArea">
                                    <div className='h-8 mt-3 bg-slate-600'></div>
                                    <div className='h-8 mt-3 bg-slate-600'></div>
                                    <div className='h-8 mt-3 bg-slate-600'></div>
                                </div>
                            </div> */}
                            
                            
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center" >
                    <div className="flex items-center justify-center menuIcons h-10 w-10" style={styles}>
                        <GiHamburgerMenu/>
                    </div>
                    <p className={`${toggle ? "" : "disnon"}`}>More</p>
                </div> */}
            </div>
        </>
    )
}

export default Navigation