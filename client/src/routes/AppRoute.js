import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from "../Components/EntryPage/LandingPage"
import Explore from '../Pages/Explore/Explore'
import Reels from '../Components/Reel/Reel'
import Message from '../Components/Message/Messag'
import Profiles from '../Pages/Profile/Profiles'
import Create from '../Pages/Create/Create'
import AuthRout from '../ProtectedRout/AuthRout'
import Login  from '../Pages/Credintial/Login'
import Signup from '../Pages/Credintial/Signup'
import Posts from '../Components/Profile/Posts'
import Saved from '../Components/Profile/Saved'
import { Rreels } from '../Components/Profile/Rreels'
import Tagged from '../Components/Profile/Tagged'

function AppRoute() {

    return (
        <>
            <Routes>
                <Route path='signup' element={<Signup/>} />
                <Route path="login" element={<Login/>}/>
            </Routes>
            <Routes> 
                <Route exact path='/' element={<AuthRout/>} >
                    <Route index element={<LandingPage />} />
                    <Route path='explore' element={<Explore />} />
                    <Route path='reel' element={<Reels />} />
                    <Route path='message' element={<Message />} />
                    <Route path='create' element={<Create />} />
                    <Route path='profile' element={<Profiles />} >
                        <Route index element={<Posts/>} />
                        <Route path='saved' element={<Saved/>} />
                        <Route path='reels' element={<Rreels/>} />
                        <Route path='tagged' element={<Tagged/>} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoute