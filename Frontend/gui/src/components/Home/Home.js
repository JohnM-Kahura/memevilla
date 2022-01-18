import Post from './post/Post'


import React,  {useState,useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'
function Home() {
    const data = []
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
