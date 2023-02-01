import './post.css'
import { RiMore2Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import axios from 'axios';
import TimeAgo from 'timeago-react';
import { Link } from 'react-router-dom';

const Post = ( {post} ) => {
    console.log(post);
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked)
    }

    const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get( `http://localhost:5000/users/fetchUser/${post.userId}`)
      setUser(res.data)
    } 

    fetchUser();
  }, [post.userId])

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/${user.username}`} style={{textDecoration: "none"}}>
                        <img src={user.profilePic || "/assets/person/10.jpeg"} alt="" className='postProfileImg' />
                        <span className='postUsename'>{user.username}</span>
                    </Link>
                    <span className='postDate'><TimeAgo datetime={`${post.createdAt}`} /></span>
                </div>
                <div className="postTopright">
                    <RiMore2Line/>
                </div>
            </div>
            <div className="postCenter">
                <span className='postText' >{post?.description}</span>
                <img className='postimg' src={`${post.image}`} alt="" />
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