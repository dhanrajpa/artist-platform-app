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
import '../Scss/Registration/Registration.css'
import Nav from './Nav';
import Footer from './Footer'
import axios from 'axios';

const theme = createTheme();



function Registration() {
    const [checkName, setName] = useState('');
    const [checkEmail, setEmail] = useState('');
    const [checkPassword, setPassword] = useState('');
    const [checkConfPassword, setConfpassword] = useState('');
    const [checkAge, setAge] = useState('');
    const [checkGender, setGender] = useState('');
    const [checkContact, setContact] = useState('');
    const [checkAddress, setAddress] = useState('');
    const [checkProfession, setProfession] = useState('');
    const [checkRole, setRole] = useState('user');

    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfpasswordChange = (e) => {
        setConfpassword(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleContactChange = (e) => {
        setContact(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleProfessionChange = (e) => {
        setProfession(e.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(checkEmail, checkPassword);
        if (checkConfPassword === checkPassword) {

            let data = {
                role: checkRole,
                name: checkName,
                email: checkEmail,
                password: checkPassword,
                age: checkAge,
                gender: checkGender,
                contact: checkContact,
                address: checkAddress,
                profession: checkProfession
            }

            axios.post("http://localhost:8080/api/check/userRegisteration", data, { headers: { "Content-Type": "application/json", }, })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => console.log(err));

            setName('');
            setEmail('');
            setPassword('');
            setAge('');
            setGender('');
            setContact('');
            setAddress('');
            setProfession('');
            setRole('');

        }
    };


    return (
        <>
            {/* <Nav /> */}
            <div id='Registration-div'>

                <ThemeProvider theme={theme}>

                    <Container component="main" maxWidth="xs" sx={{ height: '40rem', display: 'flex', alignItems: 'center' }}>
                        <CssBaseline />
                        <Box id="Registration-card"
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
                                User Registration
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0, width: '80%' }}>
                                <TextField
                                    // margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    variant="standard"
                                    sx={{ mt: 0 }}
                                    className="Uinput"
                                    InputProps={{ sx: { height: 28 } }}
                                    onChange={handleNameChange}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    id="reg-email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    variant="standard"
                                    sx={{ mt: 1, }}
                                    onChange={handleEmailChange}
                                    InputProps={{ sx: { height: 28 } }}

                                />
                                <TextField
                                    // margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="Reg-password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    sx={{ mt: 1 }}
                                    onChange={handlePasswordChange}
                                    InputProps={{ sx: { height: 28 } }}

                                />
                                <TextField
                                    // margin="normal"
                                    required
                                    fullWidth
                                    name="Confirm password"
                                    label="Confirm Password"
                                    type="password"
                                    id="Cpassword"
                                    autoComplete="current-password"
                                    variant="standard"
                                    sx={{ mt: 1 }}
                                    onChange={handleConfpasswordChange}
                                    InputProps={{ sx: { height: 28 } }}

                                />
                                <Grid container item sx={{ mt: 0 }}>
                                    <FormLabel id="radio-label" sx={{ mt: 2 }}>Gender  </FormLabel>
                                    <FormControl sx={{ ml: 5 }} >
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                        >

                                            <FormControlLabel sx={{ mt: 1 ,mb:0 }} value="Female" control={<Radio />} onChange={handleGenderChange} label="Female" />
                                            <FormControlLabel sx={{ mt: 1 ,mb:0 }} value="Male" control={<Radio />} onChange={handleGenderChange} label="Male" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <TextField
                                    // margin="normal"
                                    name="Age"
                                    label="Age"
                                    type="text"
                                    id="age"
                                    // autoComplete="current-password"
                                    variant="standard"
                                    onChange={handleAgeChange}
                                    InputProps={{ sx: { height: 30 } }}
                                    sx={{ width: "25%", float: 'left', mb: 0, mt: 0 }}
                                />


                                <TextField
                                    // margin="normal"
                                    fullWidth
                                    name="cNo"
                                    label="Contact No"
                                    type="text"
                                    id="cNo"
                                    // autoComplete="current-password"
                                    variant="standard"
                                    sx={{ width: "65%", float: 'right', mb: 0, mt: 0 }}
                                    onChange={handleContactChange}
                                />


                                <Grid container item id="userinfo">
                                    <TextField
                                        // margin="normal"
                                        fullWidth
                                        id="Profession"
                                        label="Profession"
                                        name="Profession"
                                        autoComplete="Profession"
                                        autoFocus
                                        variant="standard"
                                        sx={{ mt: 1 }}
                                        onChange={handleProfessionChange}
                                    />

                                    <TextField
                                        // margin="normal"
                                        fullWidth
                                        id="Address"
                                        label="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        autoFocus
                                        variant="standard"
                                        sx={{ mt: 1 }}
                                        onChange={handleAddressChange}
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


                                <Grid container item id='Sign-Link'>
                                    {/* <Grid container item >
                                        Have an account?
                                    <Link href="/Login" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body3">
                                            &nbsp;{"  Login"}
                                        </Link>    
                                    </Grid> */}
                                    <Grid container item >
                                        Register as an
                                        <Link href="/artistRegistration" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body4">
                                            &nbsp;{"Artist"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>


                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
            <Footer />
        </>
    )
}

export default Registration