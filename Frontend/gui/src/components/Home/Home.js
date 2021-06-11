import Post from './post/Post'
import data from '../data'
import React,  {useState,useEffect} from 'react'

import axios from 'axios'
function Home() {
    const [posts, setposts] = useState(data)

    useEffect(() => {
       axios.get('http://127.0.0.1:8000/api/')
       .then(res=>{
           setposts(res.data)
           console.log(res.data)
       })
       
    }, []);

 
    return (
        <>
         <Post posts={posts}/>   
          
          
        </>
    )
}

export default Home
