import { Toolbar, Tooltip, Box, IconButton, Modal, Typography, Button, styled, Avatar, TextField, Stack, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addpost() {
    let navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");



    const handlefileonChange = (e) => {

        setImages(e.target.value)

    }

    const handleDescchange = (e) => {

        setDescription(e.target.value)

    }

    const handleSubmit
        = (event) => {
            event.preventDefault();

            
            let str = images; 
                // console.log(str);
                let str3 = str.replace("C:\\fakepath\\", "");
                // console.log(str3);
            let


                data = {
                    artist_id:1,
                    postimage:str3 ,
                    imgdesc: description
                }

            console.log(data);

            axios.post("http://localhost:8080/api/artist/addImage", data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    navigate('/aDashboard')

                }).catch((err) => console.log(err + "Incorrect Data"));


        };


    const StyledModel = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })

    return (
        <>
            <Tooltip title="Add" onClick={e => setOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={380} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>

                        <Avatar />
                    </UserBox>
                    <div className="container">
                        <div className="row">
                            <form onSubmit={handleSubmit}>
                                <h3>React File Upload</h3>
                                <Button variant="contained" onChange={handlefileonChange} component="label" sx={{ mt: 2, mb: 2 }}>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                                <br />
                                <TextField
                                    id="outlined-textarea"
                                    label="Multiline Placeholder"
                                    placeholder="Placeholder"
                                    multiline
                                    onSubmit={handleDescchange}

                                />
                                <br />
                                <div className="form-group">
                                    <Button variant="contained" type="submit" sx={{ mt: 2, mb: 2 }}>Post</Button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <ButtonGroup variant="contained" aria-label="outlined primary button group">

                        {/* <Button type="submit">Post</Button> */}
                    </ButtonGroup>
                </Box>
            </StyledModel>
        </>
    );
};

export default Addpost