import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../Components/EntryPage/LandingPage'
import Navigation from '../../Components/Navigation/Navigation'
import Credintial from '../Credintial/Credintial'

const HomePage = () => {
  return (
    <>
      <div className='w-screen h-screen grid grid-cols-6 divide-x '>

        <div className="bg-slate-100"><Navigation/></div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Credintial/>} />
          <Route path='/explore' element={<LandingPage/>}/>
          <Route path='/reels' element={<LandingPage/>}/>
          <Route path='/message' element={<LandingPage/>}/>
          <Route path='/create' element={<LandingPage/>}/>
          <Route path='/profile' element={<LandingPage/>}/>
          <Route path='/more' element={<LandingPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default HomePage