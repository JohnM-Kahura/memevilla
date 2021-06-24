import React from 'react'
import { Grid,Paper,Container } from '@material-ui/core'
function Post({posts}) {
    return (
        <>
    <Container>
        <Grid container>
                <Grid item> 
                    {posts.map((post)=>{
                        const {image,laughs,views,comment}=post
                        return(
                    <Paper>
                        <h1>The image is:  {image}</h1>
                        <button>laughs: {laughs}</button>
                        <h1>views:{views}</h1>
                    </Paper>
                    
                    )
                    })}    
                </Grid>
            </Grid>
        </Container>
           
        </>
    )
}

export default Post
