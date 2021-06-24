import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

 

  return (
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
        image="C:\Users\jonte\Desktop\PROJECTS\Project018\memevilla.web\Frontend\gui\src\images\test.jpg"
        title="Paella dish"
      />
     
      <CardActions  >
        <IconButton aria-label='comment' className={classes.icons}>
        <InsertCommentRoundedIcon />
        <Typography variant='body2'>12</Typography>
        </IconButton>
        <IconButton aria-label="like"  className={classes.icons} >
          <FavoriteIcon />
          <Typography variant='body2'>12</Typography>
        </IconButton>
        <IconButton aria-label="share" className={classes.icons}>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='save' className={classes.icons}>
        <SaveAltOutlinedIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
