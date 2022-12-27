import { 
    Avatar, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    Checkbox, 
    IconButton,
    styled,
    Typography} from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = () => {
    const TypographyStyle = styled(Typography)(({theme})=>({
        [theme.breakpoints.down("sm")]:{
            fontSize:"0.7em"
        }
    }));
    const CardStyle = styled(Card)({
        margin: "5px 5px 20px",
    });
  return (
        <>
            <CardStyle>
                <CardHeader
                    avatar={
                    <Avatar alt="avatar" src="https://images.unsplash.com/photo-1666636276976-edea4379e0de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="avatar"
                />
                <CardContent>
                    <TypographyStyle variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor dolorum recusandae, amet, voluptatem iure quia iusto rerum eos commodi nihil animi ratione magnam fuga illum aliquid corporis magni itaque?
                    </TypographyStyle>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error"/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardStyle>

            <CardStyle>
                <CardHeader
                    avatar={
                        <Avatar alt="shihab raafat" src="https://cdn.dribbble.com/users/5949503/avatars/normal/c6fc23741d552d9d9f2e18a3b8c7a40b.jpeg?1621013567" />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shihab Raafat"
                    subheader="September 15, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/224023949_2947085202217532_7323710998409164997_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=c4LaIrWCr0MAX_b9Htw&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAF9TbnhASABQIUdDbFOzoRjo9h3ZpMryffD01gT4SFsw&oe=6367293C"
                    alt="shihab raafat"
                />
                <CardContent>
                    <TypographyStyle variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor dolorum recusandae, amet, voluptatem iure quia iusto rerum eos commodi nihil animi ratione magnam fuga illum aliquid corporis magni itaque?
                    </TypographyStyle>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error"/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardStyle>

            <CardStyle>
                <CardHeader
                    avatar={
                        <Avatar alt="avatar" src="https://images.unsplash.com/photo-1666943907892-7de72bec15c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Tina Go"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.unsplash.com/photo-1666943907892-7de72bec15c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="avatar"
                />
                <CardContent>
                    <TypographyStyle variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor dolorum recusandae, amet, voluptatem iure quia iusto rerum eos commodi nihil animi ratione magnam fuga illum aliquid corporis magni itaque?
                    </TypographyStyle>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error"/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardStyle>

            <CardStyle>
                <CardHeader
                    avatar={
                    <Avatar alt="avatar" src="https://images.unsplash.com/photo-1666858828359-06158e466cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.unsplash.com/photo-1484342878342-14169ec7e3af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="avatar"
                />
                <CardContent>
                    <TypographyStyle variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor dolorum recusandae, amet, voluptatem iure quia iusto rerum eos commodi nihil animi ratione magnam fuga illum aliquid corporis magni itaque?
                    </TypographyStyle>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error"/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardStyle>

            <CardStyle>
                <CardHeader
                    avatar={
                    <Avatar alt="avatar" src="https://images.unsplash.com/photo-1665999560543-5d1942e74e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.unsplash.com/photo-1579706053721-ff2d432aabf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="avatar"
                />
                <CardContent>
                    <TypographyStyle variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor dolorum recusandae, amet, voluptatem iure quia iusto rerum eos commodi nihil animi ratione magnam fuga illum aliquid corporis magni itaque?
                    </TypographyStyle>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error"/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardStyle>
        </>
  )
}

export default Post