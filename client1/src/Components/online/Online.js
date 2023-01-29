import './online.css'

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
          <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUsename'>{user.username}</span>
    </li>
  )
}

export default Online