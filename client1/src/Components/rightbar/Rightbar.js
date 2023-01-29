import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText'>
            {" "}
            <b>Poal </b> foster <b> and 3 other friends</b> have birthday
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className='rightbarTitle' >Online Friends</h4>
        <ul className="rightbarFriendsList">

          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return ( 
      <>
        <h4 className='rightBarTitle'>user information title</h4>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className='rightBarInfoKey'>City: </span>
            <span className='rightBarInfoValue'>New York </span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightBarInfoKey'>From: </span>
            <span className='rightBarInfoValue'>Kottarakara </span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightBarInfoKey'>RelationShip: </span>
            <span className='rightBarInfoValue'>Vara </span>
          </div>
        </div>

        <h4 className='rightBarTitle'>user information title</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFolloing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
          <div className="rightbarFolloing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
          <div className="rightbarFolloing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
          <div className="rightbarFolloing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
          <div className="rightbarFolloing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
          <div className="rightbarFolloing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarimagefollowing" />
            <span className='rightbarFollowingName' >John Carten</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/> }
        
      </div>
    </div>
  )
}

export default Rightbar