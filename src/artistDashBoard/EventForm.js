import { Button, TextField } from '@mui/material'
import React from 'react'

import { useState } from "react";

import Box from "@mui/material/Box";



import CssBaseline from "@mui/material/CssBaseline";


import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import Link from "@mui/material/Link";

import Grid from "@mui/material/Grid";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();


function EventForm() {

let navigate = useNavigate();

    const [eName, setEname] = useState("");

    const [eDesc, seteDesc] = useState("");


    const handleNamechange = (e) => {

            setEname(e.target.value)

        }





    const handleDescchange= (e) => {

            seteDesc(e.target.value)

        }

    const handleSubmit
        = (event) => {
            event.preventDefault();

            let
                data = {

                    ename: eName,

                    event_desc: eDesc

                }

            console.log(data);

            axios.post("http://localhost:8080/api/artist/artistDashBoard/events/addevent", data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response.data);
// 

                }).catch((err) => console.log(err + "Incorrect Data"));


        };






    return (
        <div>
            <ThemeProvider
                theme={theme}>

                <Container
                    component="main"
                    maxWidth="xs">

                    <CssBaseline />

                    <Box

                        sx={{

                            marginTop: 8,

                            display: "flex",

                            flexDirection: "column",

                            alignItems: "center",

                            boxShadow: "0 0 5px;"

                        }}

                    >

                        <Typography
                            component="h1"
                            variant="h5"
                            sx={{
                                mt:
                                    1
                            }}>

                            Post Event

                        </Typography>



                        <Box

                            component="form"

                            noValidate

                            sx={{
                                mt:
                                    1
                            }}

                            onSubmit={handleSubmit}



                        >

                            <TextField

                                margin="normal"

                                required

                                label="Event Name"

                                name="Event Name"

                                autoFocus

                                onChange={handleNamechange}

                            />

                            <TextField

                                id="outlined-textarea"

                                onChange={handleDescchange}

                                label="Multiline Placeholder"

                                placeholder="Placeholder"

                                multiline

                            />

                            <br />

                            <Button

                                type="submit"

                                //   fullWidth

                                variant="contained"

                                sx={{
                                    mt:
                                        3, mb: 2
                                }}

                            >

                                Post

                            </Button>

                        </Box>

                    </Box>

                </Container>

            </ThemeProvider>


        </div>
    )
}

export default EventForm