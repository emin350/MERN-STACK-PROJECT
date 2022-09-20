import {useEffect, useState} from 'react'
import axios from 'axios';

function Posts() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/posts")
        .then( (res) =>{console.log(res)})
        .catch(err => console.log(err))
    },[]);

  return (
    <div>
        Posts
     </div>
  )
}

export default Posts;