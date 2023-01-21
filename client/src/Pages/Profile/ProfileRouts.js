import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../../Components/Profile/Posts'
import { Rreels } from '../../Components/Profile/Rreels'
import Saved from '../../Components/Profile/Saved'
import Tagged from '../../Components/Profile/Tagged'

const ProfileRouts = () => {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<Posts/>} />
            <Route path='/profile/saved' element={<Saved/>} />
            <Route path='/profile/reels' element={<Rreels/>} />
            <Route path='/profile/tagged' element={<Tagged/>} />
        </Route>
    </Routes>
  )
}

export default ProfileRouts