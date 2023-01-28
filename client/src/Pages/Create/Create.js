import React from 'react'
import { RiImageAddLine } from 'react-icons/ri'
import { BiMoviePlay } from 'react-icons/bi'
import { MdOutlineLiveTv } from 'react-icons/md'
import UplodeFile from './UplodeFile'
import Golive from './Golive'
// import { IconContext } from 'react-icons'

const iconStyle = {fontSize: "3.5em",}

const Create = () => {

  return (
    <>
      {/* <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">

          <div class="flex flex-wrap -m-4 text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center">
                <RiImageAddLine style={iconStyle} />
                <h2 class="title-font font-medium text-3xl text-gray-900 mt-5">Add-Posts</h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center">
                <BiMoviePlay  style={iconStyle}/>
                <h2 class="title-font font-medium text-3xl text-gray-900 mt-5">Reels</h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center">
                <MdOutlineLiveTv  style={iconStyle}/>
                <h2 class="title-font font-medium text-3xl text-gray-900 mt-5">Go TV-Live</h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Golive/>
      {/* <UplodeFile/> */}
    </>
  )
}

export default Create