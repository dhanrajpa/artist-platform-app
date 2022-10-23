import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Scss/ArtistRegistration/ArtistReg.css'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Nav from './Nav'
import Footer from './Footer';

const theme = createTheme();
function ArtistRegistration() {
    let navigate = useNavigate();
    const [checkNameA, setNameA] = useState('');
    const [checkEmailA, setEmailA] = useState('');
    const [checkPasswordA, setPasswordA] = useState('');
    const [checkConfPasswordA, setConfpasswordA] = useState('');
    const [checkAgeA, setAgeA] = useState('');
    const [checkGenderA, setGenderA] = useState('');
    const [checkContactA, setContactA] = useState('');
    const [checkArtFormA, setArtFormA] = useState('');
    const [checkRoleA, setRoleA] = useState('artist');


    const handleNameChange = (e) => {
        setNameA(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmailA(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPasswordA(e.target.value)
    }
    const handleConfpasswordChange = (e) => {
        setConfpasswordA(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAgeA(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGenderA(e.target.value);
    }
    const handleContactChange = (e) => {
        setContactA(e.target.value);
    }
    const handleArtFormChange = (e) => {
        setArtFormA(e.target.value);
    }

    const handleSubmitA = async (event) => {
        event.preventDefault();
        console.log(checkEmailA, checkPasswordA,checkAgeA);
        if (checkConfPasswordA === checkPasswordA) {

            let data =
            {
                role: checkRoleA,
                name: checkNameA,
                email: checkEmailA,
                password: checkPasswordA,
                age: checkAgeA,
                gender: checkGenderA,
                contact: checkContactA,
                artform: checkArtFormA
            }

            axios.post("http://localhost:8080/api/check/artistRegisteration", data, { headers: { "Content-Type": "application/json", }, })
                .then((response) => {
                    console.log(response.data);
                    navigate('/Login');
                })
                .catch((err) => console.log(err));

            setNameA('');
            setEmailA('');
            setPasswordA('');
            setAgeA('');
            setGenderA('');
            setContactA(''); 
            setArtFormA('');
            setRoleA('');

        }
    };

    return (
        <>
        {/* <Nav/> */}
        <div id='ARegistration-div'>

            <ThemeProvider theme={theme}>

                <Container component="main" maxWidth="xs" sx={{ height: '40rem', display: 'flex', alignItems: 'center' }}>
                    <CssBaseline />
                    <Box id="ARegistration-card"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <Avatar sx={{ mt: 2, mb: 1, bgcolor: 'primary.main', }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h6">
                            Artist Registration
                        </Typography>
                        <Box component="form" onSubmit={handleSubmitA} noValidate sx={{ mt: 1, width: '80%', }}>
                            <TextField
                                fullWidth
                                id="Aname"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                variant="standard"
                                sx={{ mt: 0 }}
                                onChange={handleNameChange}
                                InputProps={{ sx: { height: 28 } }}
                                />

                            <TextField
                                required
                                fullWidth
                                id="areg-email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="standard"
                                sx={{ mt: 1 }}
                                onChange={handleEmailChange}
                                InputProps={{ sx: { height: 28 } }}

                            />
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="AReg-password"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{ mt: 1 }}
                                onChange={handlePasswordChange}
                                InputProps={{ sx: { height: 28 } }}

                            />
                            <TextField
                                required
                                fullWidth
                                name="Confirm password"
                                label="Confirm Password"
                                type="password"
                                id="ACpassword"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{ mt: 1 }}
                                onChange={handleConfpasswordChange}
                                InputProps={{ sx: { height: 28 } }}
                                />
                            <Grid container item sx={{ mt: 2 }}>
                                <FormLabel id="aRadio-label" sx={{ mt: 1 }}>Gender  </FormLabel>
                                <FormControl sx={{ ml: 5 }}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                    >

                                        <FormControlLabel  value="Female" control={<Radio />} onChange={handleGenderChange} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio />} onChange={handleGenderChange}  label="Male" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <TextField
                                name="Age"
                                label="Age"
                                type="text"
                                id="age"
                                variant="standard"
                                onChange={handleAgeChange}
                                InputProps={{ sx: { height: 28 } }}
                                sx={{ width: "25%", float: 'left', mt: 0 }}
                            />

                            <TextField
                                fullWidth
                                name="cNo"
                                label="Contact No"
                                type="text"
                                id="cNo"
                                // autoComplete="current-password"
                                variant="standard"
                                onChange={handleContactChange}
                                sx={{ width: "65%", float: 'right', mb: 0, mt: 0 }}
                                InputProps={{ sx: { height: 28 } }}

                            />

                            <Grid container item id="artform">
                                <TextField
                                    fullWidth
                                    id="Art-Form"
                                    label="Art Form"
                                    name="Art Form"
                                    autoComplete="Art Form"
                                    autoFocus
                                    variant="standard"
                                    sx={{ mt: 1 }}
                                    onChange={handleArtFormChange}
                                    InputProps={{ sx: { height: 28 } }}

                                />
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, mb: 2, color: 'white' }}
                            >
                                Sign Up
                            </Button>

                            <Grid container item id='ASign-Link'>
                                <Grid container item >
                                    Have an account?
                                    <Link href="/Login" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body3">
                                        &nbsp;{"  Login"}
                                    </Link>
                                </Grid>
                                <Grid container item >
                                    Register as a
                                    <Link href="/userRegistration" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body5">
                                        &nbsp;{"User"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>


                    </Box>
                </Container>
            </ThemeProvider>

        </div>
        <Footer/>
        </>
    )
}

export default ArtistRegistration