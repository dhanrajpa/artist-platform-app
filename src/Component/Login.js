import React, { useState, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Scss/Login/Login.css'
import axios from 'axios';
import Footer from './Footer';
import { NavLink } from "react-router-dom";
import AuthContext from '../authCheck/AuthProvider';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1F1F1F', // 
        }
    },
});

function Login() {

    const { setAuth, isAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // const [open, setOpen] = useState({ isOpen: false, message: '', type: '' });

    const [checkEmail, setEmail] = useState('');
    const [checkPassword, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        let data =
        {
            email: checkEmail, password: checkPassword
        }

        axios.post("http://localhost:8080/api/check/authenticateLogin", JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        }
        ).then((response) => {
            console.table(response?.data);
            let role = response.data.role;
            let accessToken = response?.data?.accessToken;
            setAuth({ role, accessToken })
            sessionStorage.setItem("role", role)
            sessionStorage.setItem("token", accessToken)
            navigate(from, { replace: true })

        }).catch((err) => {
            return console.log(err.response?.status)

        });

        setEmail('');
        setPassword('');

    };

    return (
        <>
            <div id='Login-div'>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs" sx={{ height: '40rem', display: 'flex', alignItems: 'center', pt: 5 }}>
                        <CssBaseline />
                        <Box id="Login-card"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyItems: 'center',
                            }}
                        >
                            <Avatar sx={{ mt: 4, mb: 2, bgcolor: '#1F1F1F', }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h6">
                                Enter Login Credentials!
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '80%', }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    variant="standard"
                                    onChange={handleEmailChange}
                                    placeholder="abc@xyz.com"
                                    size="small"
                                    sx={{ mt: 1 }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    onChange={handlePasswordChange}
                                    size="small"
                                    sx={{ mt: 1, my: 1 }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2, color: 'white' }}

                                >
                                    Login
                                </Button>
                                <Grid container item id='Forget-Link'>
                                    <Grid container item xs sx={{ mt: 1 }}>
                                        <Link href="#" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body3"  >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid container item >
                                        Register as a

                                        <NavLink to="/artistRegistration" color="#616161" style={{ color: 'inherit', textDecoration: 'inherit' }} variant="body3">
                                            &nbsp; {"Artist"} &nbsp;
                                        </NavLink>
                                        or
                                        <NavLink to="/userRegistration" color="#616161" style={{ color: 'inherit', textDecoration: 'inherit' }} variant="body3">
                                            &nbsp; {"User"}
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>




            </div>
            <Footer />

        </>
    );
}

export default Login;