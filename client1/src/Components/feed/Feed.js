import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
// import {Posts} from '../../dummyData'

const Feed = () => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get( "http://localhost:5000/posts/timeline/63c2f546044c8e8c02b7c827")
      setPost(res.data)
    }
    fetchPost();
  }, [])
  

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed