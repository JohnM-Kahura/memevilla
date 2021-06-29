import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ViewsIcon from '@material-ui/icons/Visibility';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
import { Grid,Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height:400,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  icons:{
      marginRight:'auto',
  }
}));

export default function Post({posts}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

 var link="http://127.0.0.1:8000/media/memes/fuck.jpg"
 var image =new Image()
 image.onload=function() {
     console.log(this.width );
     console.log(this.height );
 }
 image.src=link
  return (
    <Container >
      <Grid container>
          <Grid item  > 
          {posts.map((post)=>{
                        const {image,laughs,views,comment}=post
                        return(
                            <div style={{width:'500px'}}>

                          <Card className={classes.root}>
                          <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                T
                              </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                              </IconButton>
                            }
                            title="Elchalpo"
                            subheader="September 14, 2016"
                            />
                          <CardMedia
                            className={classes.media}
                            image={image}
                            
                            
                            />
                         
                          <CardActions  >
                            <IconButton aria-label='comment' className={classes.icons}>
                            <InsertCommentRoundedIcon />
                            <Typography variant='body2'>12</Typography>
                            </IconButton>
                            <IconButton aria-label="like"  className={classes.icons} >
                              <FavoriteIcon />
                              <Typography variant='body2'>{laughs}</Typography>
                            </IconButton>
                            <IconButton aria-label="views" className={classes.icons}>
                              <ViewsIcon />
                              <Typography variant='body2'>{views}</Typography>
                            </IconButton>
                            <IconButton aria-label='save' className={classes.icons}>
                            <SaveAltOutlinedIcon />
                            </IconButton>
                            
                          </CardActions>
                          
                        </Card>
                    
                            </div>
                    )
                    })}

      </Grid>
          </Grid>
    </Container>
  );
}
