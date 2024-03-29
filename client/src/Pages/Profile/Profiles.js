import './style.css'
import React, { useState } from 'react'
import { 
  RiBookmarkFill, RiBookmarkLine, 
  RiAccountPinBoxLine, RiAccountPinBoxFill,
  RiLayoutGridFill, RiLayoutGridLine,
} from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi'
// import ProfileRouts from './ProfileRouts';
import { NavLink, Outlet } from 'react-router-dom';

const Profiles = () => {

  const [l1, setL1] = useState(true);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);

  return (
    <div>

    <main className="bg-gray-100 bg-opacity-25">

      <div className="lg:w-8/12 lg:mx-auto">

        <header className="flex flex-wrap items-center p-4 md:py-8">

          <div className="md:w-3/12 md:ml-16">
            {/* <!-- profile image --> */}
            <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"/>
          </div>

          {/* <!-- profile meta --> */}
          <div className="w-8/12 md:w-7/12 ml-4">
            <div className="md:flex md:flex-wrap md:items-center mb-4">
              <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                araaamrtravlerrr_
              </h2>

              {/* <!-- badge --> */}
              <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                             relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                <i className="fas fa-check text-white text-xs absolute inset-x-0
                             ml-1 mt-px"></i>
              </span>

              {/* <!-- follow button --> */}
              <a href="/" className="bg-blue-500 px-2 py-1 
                      text-white font-semibold text-sm rounded block text-center
                      sm:inline-block block">Edit Profile</a>
            </div>

            {/* <!-- post, following, followers list for medium screens --> */}
            <ul className="hidden md:flex space-x-8 mb-4">
              <li>
                <span className="font-semibold">136</span>
                posts
              </li>

              <li>
                <span className="font-semibold">40.5k</span>
                followers
              </li>
              <li>
                <span className="font-semibold">302</span>
                following
              </li>
            </ul>

            {/* <!-- user meta form medium screens --> */}
            <div className="hidden md:block">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

          </div>

          {/* <!-- user meta form small screens --> */}
          <div className="md:hidden text-sm my-2">
            <h1 className="font-semibold">Mr Travlerrr...</h1>
            <span>Travel, Nature and Music</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>

        </header>

        {/* <!-- posts --> */}
        <div className="px-px md:px-3">

          {/* <!-- user following for mobile only --> */}
          <ul className="flex md:hidden justify-around space-x-8 border-t 
              text-center p-2 text-gray-600 leading-snug text-sm">
            <li>
              <span className="font-semibold text-gray-800 block">136</span>
              posts
            </li>

            <li>
              <span className="font-semibold text-gray-800 block">40.5k</span>
              followers
            </li>
            <li>
              <span className="font-semibold text-gray-800 block">302</span>
              following
            </li>
          </ul>

          {/* <!-- insta freatures --> */}
          <ul className="flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t">
            {/* <!-- posts tab is active --> */}

            <li className={l1 ? `md:border-t md:border-gray-700 md:-mt-px md:text-gray-700` : ""}>
              <NavLink className="inline-block p-3" style={({isActive}) =>  isActive ? setL1(true) : setL1(false) } to="/profile/">
                {/* <i className="fas fa-th-large text-xl md:text-xs"></i> */}
                <RiLayoutGridLine/>
                <span className="hidden md:inline">post</span>
              </NavLink>
            </li>

            <li className={l2 ? `md:border-t md:border-gray-700 md:-mt-px md:text-gray-700` : ""}>
              <NavLink className="inline-block p-3" to="reels" style={({isActive}) =>  isActive ? setL2(true) : setL2(false) }>
                {/* <i className="fas fa-th-large text-xl md:text-xs"></i> */}
                <BiMoviePlay/>
                <span className="hidden md:inline">Reels</span>
              </NavLink>
            </li>

            <li className={l3 ? `md:border-t md:border-gray-700 md:-mt-px md:text-gray-700` : ""}>
              <NavLink className="inline-block p-3" to="saved" style={({isActive}) =>  isActive ? setL3(true) : setL3(false) }>
                {/* <i className="far fa-square text-xl md:text-xs"></i> */}
                <RiBookmarkLine/>
                <span className="hidden md:inline">saved</span>
              </NavLink>
            </li>

            <li className={l4 ? `md:border-t md:border-gray-700 md:-mt-px md:text-gray-700` : ""}>
              <NavLink className="inline-block p-3" to="tagged" style={({isActive}) =>  isActive ? setL4(true) : setL4(false) }>
                {/* <i className="fas fa-user border border-gray-500 px-1 pt-1 rounded text-xl md:text-xs"></i> */}
                <RiAccountPinBoxLine/>
                <span className="hidden md:inline">tagged</span>
              </NavLink>
            </li>
          </ul>
          {/* <!-- flexbox grid --> */}
          <div className="flex flex-wrap -mx-px md:-mx-3">

            {/* <!-- column --> */}
              <Outlet/>

          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Profiles