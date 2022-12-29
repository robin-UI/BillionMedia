import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from "../Components/EntryPage/LandingPage"
import Credintial from "../Pages/Credintial/Credintial"
import Explore from '../Pages/Explore/Explore'
import Reels from '../Components/Reel/Reel'
import Message from '../Components/Message/Messag'
import Profiles from '../Pages/Profile/Profiles'
import Create from '../Pages/Create/Create'
import AuthRout from '../ProtectedRout/AuthRout'

function AppRoute() {

    return (
        <>
            <Routes>
                <Route path="/login" element={<Credintial />} />
            </Routes>

            <Routes>
                <Route path='/' element={<AuthRout/>} >
                    <Route index element={<LandingPage />} />
                    <Route path='explore' element={<Explore />} />
                    <Route path='reel' element={<Reels />} />
                    <Route path='message' element={<Message />} />
                    <Route path='create' element={<Create />} />
                    <Route path='profile' element={<Profiles />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoute