import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'

const HomePage = () => {
  return (
    <>
      <div className='w-screen h-screen grid grid-cols-6 divide-x '>
        <div className="bg-slate-100"><Navigation/></div>
          <Outlet/>
      </div>
    </>
  )
}

export default HomePage