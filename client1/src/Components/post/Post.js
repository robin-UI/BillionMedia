import './post.css'
import { RiMore2Line } from "react-icons/ri";
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ( {post} ) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(( u )=> u.id === post.userId )[0].profilePicture} alt="" className='postProfileImg' />
                    <span className='postUsename'>{Users.filter(( u )=> u.id === post.userId )[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopright">
                    <RiMore2Line/>
                </div>
            </div>
            <div className="postCenter">
                <span className='postText' >{post?.desc}</span>
                <img className='postimg' src={`${post.photo}`} alt="" />
            </div>
            <div className="postBottom">
                <div className="postbottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postbottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post