import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'

const HomePage = () => {
  return (
    <>
      <div className='w-screen h-screen md:grid md:grid-cols-6 divide-x '>
        <div className="hidden md:block bg-slate-100"><Navigation/></div>
        <div className='md:col-span-5'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default HomePage