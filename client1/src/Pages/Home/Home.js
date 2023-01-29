import './home.css'
import { Topbara } from '../../Components/topbar/Topbara'
import  Sidebar  from '../../Components/sidebar/Sidebar'
import  Feed  from '../../Components/feed/Feed'
import  Rightbar  from '../../Components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
    <Topbara/>
     <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>

     </div>
    </>
  )
}

export default Home