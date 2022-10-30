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
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Card, CardHeader, Checkbox, Button, Tooltip } from '@mui/material'
import ProfilePicGoku from '../images/tom-cruise-secret-life.webp'
import { fontFamily, fontStyle } from '@mui/system';
import '../Scss/ArtistDashboard/PostA/PostA.css'
import { Link } from 'react-router-dom';






const PostA = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(false);

    const img = { props }

    const handleClick = (event) => {
        setAnchorEl(!anchorEl);
    };

    return (
        <>
            <Card sx={{ margin: 1, boxShadow: 0 }}>

                <IconButton variant="h6" sx={{ float: "left", ml: "0.3rem", mt: "0.3rem" }} letterSpacing={2} component="div">
                    <Avatar alt="Goku" src={ProfilePicGoku} sx={{ width: 32, height: 32 }} />
                </IconButton>

                <Typography variant="h6" color="inherit" pt={1} sx={{ float: "left", mt: "0.3rem" }} letterSpacing={1} component="div">
                    <Button sx={{ fontWeight: 'bold', pb: 0, pt: 0, display: 'inline-flex', color: '#1F1F1F', TextDecoder: 'none' }}>Kakarot</Button>
                </Typography>

                <CardMedia
                    component="img"
                    // height="10%"
                    image={ProfilePicGoku}
                    sx={{ boxShadow: 1 }}
                />

                <CardActions disableSpacing sx={{ position: 'relative', pt: 0, pb: 0 }} >
                    <Box flexDirection="column" sx={{ display: 'flex', pb: 0 }}>
                        <Box flexDirection="row" sx={{ display: 'flex', pb: 0 }} >
                            <Tooltip title="Like" >
                                <Checkbox uncheckedIcon={<FavoriteBorder fontSize='medium' sx={{ mb: 0, mt: 0, ml: 0 }} />} icon={<FavoriteBorder fontSize='medium' sx={{ mb: 0, mt: 0, ml: 0 }} />} checkedIcon={<Favorite sx={{ color: "red", mb: 0, transform: "scale(1.2)", }} />} />
                            </Tooltip>
                            <Tooltip title="See Comments" >
                                <IconButton aria-label="add to favorites" sx={{ mb: 0, mt: 0, ml: 2 }}  >
                                    <ChatRoundedIcon fontSize='medium' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Typography variant="body3" color="#1F1F1F" fontWeight='fontWeightMedium' id="Like-content" href="/" >
                            1 Like
                        </Typography>
                    </Box>
                </CardActions>

                <CardContent id="Card-content">
                    <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="User-Name">Kakarot</Button>
                    <Typography variant="body2" color="text.secondary" id="content-bio" align="justify" sx={{ pb: 1, pr: 1 }}>
                        the 'color' props to TypgraphyYou dont need to seperately pass th
                        the 'color' props to TypgraphyYou dont need to seperately pass th
                    </Typography>
                </CardContent>

                <CardContent id="Card-comment">

                    <Button component={Link} to='#' sx={{ pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="view-comments" onClick={handleClick}>view all 2 comments </Button>

                    {anchorEl &&
                        <>
                            <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="User-Name-commentor">Sandesh</Button>
                            <Typography variant="body2" color="text.secondary" id="content-comment" align="justify" sx={{ pb: 0, pr: 1 }}>
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                            </Typography>
                            <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="User-Name-commentor">Khali muttaswamy venugopal ayyar</Button>
                            <Typography variant="body2" color="text.secondary" id="content-comment" align="justify" sx={{ pb: 0, pr: 1 }}>
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                            </Typography>
                        </>
                    }
                </CardContent>











            </Card>
        </>
    )
}

export default PostA
