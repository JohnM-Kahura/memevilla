import Post from './post/Post'
import Post1 from './post/post1'
import data from '../data'
import React,  {useState,useEffect} from 'react'
import AppBar from './AppBar'

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
        <AppBar/>
         <Post posts={posts}/>
         <Post1/>   
          
          
        </>
    )
}

export default Home
