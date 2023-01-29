import  './topbar.css'
import { RxMagnifyingGlass, RxPerson, RxChatBubble, RxBell } from "react-icons/rx"

export const Topbara = () => {
  return (
    <div className='topbarConntainer'>
        <div className="toopbarLeft">
            <span className="logo">Facebook</span>
        </div>
        <div className="toopbarCenter">
            <div className="searchbar">
                <RxMagnifyingGlass className="searchIcon" />
                <input type="text" placeholder='Search for frends , post or video' className='searchInput' />
            </div>
        </div>
        <div className="toopbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <RxPerson/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <RxChatBubble/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <RxBell/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>

            <img src="/assets/person/1.jpeg" className='topbarImg' alt="" />
        </div>
    </div>
  )
}
