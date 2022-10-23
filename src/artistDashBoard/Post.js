import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Card, CardHeader, Checkbox, Button } from '@mui/material'

const Post =(props) =>{

    const imgs = {props}

    const ut ="./DBimage/";

    return (

        <Card sx={{margin:2}}>

            <Button variant="text" color="primary" sx={{ float: "left", ml: "1rem" }}>

                <Typography gutterBottom variant="h6    " component="div">
                    <AccountCircleIcon /> {imgs.props.imgs.postimg_id}
                </Typography>
            </Button>

            <CardMedia
                component="img"
                height="20%"
                image={ut+imgs.props.imgs.postimage}
                sx={{ height: '30rem' }}
            />
            <CardContent>
                <Typography variant="body3" color="text.secondary">
                {imgs.props.imgs.imgdesc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red", mb: 0 }} />} />
                </IconButton>
                <Typography variant="body3" color="text.secondary">
                   <Button> Comments </Button>
                </Typography>

            </CardActions>

        </Card>
    )
}

export default Post