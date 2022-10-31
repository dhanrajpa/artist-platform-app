import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Card, CardHeader, Checkbox, Button, Tooltip } from '@mui/material'
import ProfilePicGoku from '../images/tom-cruise-secret-life.webp'
import { fontFamily, fontStyle } from '@mui/system';
import '../Scss/ArtistDashboard/PostA/PostA.css'
import { Link } from 'react-router-dom';
import ShowMoreText from "react-show-more-text";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,

    p: 4,
};

const backDrop = {
    backdropFilter: "blur(3px)",
    backgroundColor: 'rgba(0,0,30,0.4)',
}


const PostA = (props) => {

    const img = { props }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(!anchorEl);
    };

    //show more/less text of bio
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }

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
                    image={ProfilePicGoku}
                    sx={{ boxShadow: 1 }}
                />

                <CardActions disableSpacing sx={{ position: 'relative', pt: 0, pb: 0 }} >
                    <Box flexDirection="column" sx={{ display: 'flex', pb: 0 }}>
                        <Box flexDirection="row" sx={{ display: 'flex', pb: 0 }} >
                            <Tooltip title="Like" >
                                <Checkbox uncheckedIcon={<FavoriteBorder fontSize='medium' sx={{ mb: 0, mt: 0, ml: 0 }} />} icon={<FavoriteBorder fontSize='medium' sx={{ mb: 0, mt: 0, ml: 0 }} />} checkedIcon={<Favorite sx={{ color: "red", mb: 0, transform: "scale(1.2)", }} />} />
                            </Tooltip>

                            {/* comment Box */}
                            <Tooltip title="See Comments" >
                                <IconButton aria-label="add to favorites" onClick={handleOpen} sx={{ mb: 0, mt: 0, ml: 2 }}  >
                                    <ChatRoundedIcon fontSize='medium' />
                                </IconButton>
                            </Tooltip>
                            <Modal
                                sx={backDrop}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <>
                                        <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} ClassName="User-Name-commentor">Sandesh</Button>
                                        <Typography variant="body2" color="text.secondary" className="content-comment" align="justify" sx={{ pb: 0, pr: 1 }}>
                                            <ShowMoreText
                                                lines={1}
                                                more="Show more"
                                                less="Show less"
                                                className="content-css"
                                                anchorClass="show-more-less-clickable"
                                                onClick={executeOnClick}
                                                expanded={false}
                                                width={700}
                                                id="show-more"
                                                truncatedEndingComponent={"... "}
                                            >
                                                the 'color' props to TypgraphyYou dont need to seperately pass th
                                                the 'color' props to TypgraphyYou dont need to seperately pass th
                                            </ShowMoreText>
                                        </Typography>

                                    </>
                                </Box>
                            </Modal>
                        </Box>



                        <Typography variant="body3" color="#1F1F1F" fontWeight='fontWeightMedium' id="Like-content" href="/" >
                            1 Like
                        </Typography>
                    </Box>
                </CardActions>

                <CardContent id="Card-content">
                    <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="User-Name">Kakarot</Button>
                    <Typography variant="body2" color="text.secondary" id="content-bio" align="justify" sx={{ pb: 1, pr: 1 }}>
                        <ShowMoreText
                            lines={1}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="show-more-less-clickable"
                            onClick={executeOnClick}
                            expanded={false}
                            width={700}
                            id="show-more"
                            truncatedEndingComponent={"... "}
                        >
                            the 'color' props to TypgraphyYou dont need to seperately pass th
                            the 'color' props to TypgraphyYou dont need to seperately pass th

                        </ShowMoreText>
                    </Typography>
                </CardContent>

                <CardContent id="Card-comment">
                    {!open &&
                        <Button component={Link} to='#' sx={{ pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} id="view-comments" onClick={handleClick}>view all 2 comments </Button>
                    }

                    {anchorEl &&
                        <>
                            <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} className="User-Name-commentor">Sandesh</Button>
                            <Typography variant="body2" color="text.secondary" className="content-comment" align="justify" sx={{ pb: 0, pr: 1 }}>
                                <ShowMoreText
                                    lines={1}
                                    more="Show more"
                                    less="Show less"
                                    className="content-css"
                                    anchorClass="show-more-less-clickable"
                                    onClick={executeOnClick}
                                    expanded={false}
                                    width={700}
                                    id="show-more"
                                    truncatedEndingComponent={"... "}
                                >
                                    the 'color' props to TypgraphyYou dont need to seperately pass th
                                    the 'color' props to TypgraphyYou dont need to seperately pass th
                                </ShowMoreText>
                            </Typography>
                            <Button component={Link} to='#' sx={{ fontWeight: 'bold', pr: 1, pb: 0, pt: 0, pl: 0, color: '#1F1F1F', }} className="User-Name-commentor">Khali muttaswamy </Button>
                            <Typography variant="body2" color="text.secondary" className="content-comment" align="justify" sx={{ pb: 0, pr: 1 }}>
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                                the 'color' props to TypgraphyYou dont need to seperately pass th
                            </Typography>
                        </>
                    }
                </CardContent>











            </Card >
        </>
    )
}

export default PostA
