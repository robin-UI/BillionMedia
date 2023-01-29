import './profile.css'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import { Topbara } from '../../Components/topbar/Topbara'

const Profile = () => {
    return (
        <>
            <Topbara />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profilecover">
                            <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
                            <img className='profileUsereImg' src="/assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Safin Thomas</h4>
                            <span className='profileInfoDesc'>Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile