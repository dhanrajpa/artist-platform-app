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
import ProfilePicGoku from '../images/ProfilePicGoku.jpg'

const PostA = (props) => {

    const img = { props }

    return (
        <>
            <Card sx={{ margin: 2 }}>

                <IconButton gutterBottom variant="h6" sx={{ float: "left", ml: "0.3rem" }} letterSpacing={2} component="div">
                    <Avatar alt="Goku" src={ProfilePicGoku} sx={{ width: 32, height: 32 }} />
                </IconButton>

                <Typography gutterBottom variant="h6" color="inherit" pt={1} sx={{ float: "left", ml: "0.3rem" }} letterSpacing={1} component="div">
                    Kakarot
                </Typography>

                <CardMedia
                    component="img"
                    height="20%"
                    image={ProfilePicGoku}
                    sx={{ height: '30rem' }}
                />

                <CardContent>
                    <Typography variant="body3" color="text.secondary">
                        {/* {imgs.props.imgs.imgdesc} */}
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
        </>
    )
}

export default PostA
