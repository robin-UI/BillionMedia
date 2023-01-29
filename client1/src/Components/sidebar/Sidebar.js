import "./sidebar.css"
import { MdRssFeed } from "react-icons/md"
import { IoIosSchool } from "react-icons/io"
import { 
  RiChat2Line,
  RiPlayCircleFill,
  RiGroupFill,
  RiBookmarkFill,
  RiQuestionFill,
  RiShoppingBagFill,
  RiCalendarTodoFill,
 } from "react-icons/ri"
 import { Users } from '../../dummyData'
import CloseFriends from "../closeFriends/CloseFriends"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RiChat2Line className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <RiPlayCircleFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <RiGroupFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Group</span>
          </li>

          <li className="sidebarListItem">
            <RiBookmarkFill className="sidebarIcon"/>
            <span className="sidebarListItemText">BookMarks</span>
          </li>

          <li className="sidebarListItem">
            <RiQuestionFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <RiShoppingBagFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <RiCalendarTodoFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <IoIosSchool className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <CloseFriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar