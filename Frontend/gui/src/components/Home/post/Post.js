import React from 'react'

function Post({posts}) {
    return (
        <>
         {posts.map((post)=>{
             const {image,laughs,views,comment}=post
             return(
                 <div>
                   <h1>The image is:  {image}</h1>
                    <button>laughs: {laughs}</button>
                     <h1>views:{views}</h1>
                     {/* <h2>commment content:{comment.content}</h2>
                     <h2>comment replies:{comment.replies}</h2>
                     <button>comment:likes{comment.likes}</button> */}
                     

                 </div>
             )
         })}   
        </>
    )
}

export default Post
