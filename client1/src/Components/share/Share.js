import './share.css'
import { 
    FcAddImage,
    FcGlobe,
    FcPortraitMode,
    FcDownload
 } from "react-icons/fc";

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImage' src="/assets/person/1.jpeg" alt="" />
                <input type="text" placeholder="What's in ypur mind" className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <FcAddImage className='shareIcon'/>
                        <span className='shareOptiontext'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <FcDownload className='shareIcon'/>
                        <span className='shareOptiontext'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <FcGlobe className='shareIcon'/>
                        <span className='shareOptiontext'>Locations</span>
                    </div>
                    <div className="shareOption">
                        <FcPortraitMode className='shareIcon'/>
                        <span className='shareOptiontext'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton' > Share </button>
            </div>
        </div>
    </div>
  )
}

export default Share