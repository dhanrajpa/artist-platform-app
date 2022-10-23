import * as React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../Scss/ContactUs/ContactUs.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';


const commonPage = ['Home', 'Login', 'Register', 'About Us', 'Artist DashBoard', 'User DashBoard', 'Contact Us'];

function Nav() {
    const { isAuth, setAuth } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [role, setRole] = useState("")

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOut = () => {
        handleCloseUserMenu()
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('token')
        setAuth({})
        setRole("")
    }

    useEffect(() => {
        if (isAuth) {
            setRole(isAuth.role)
            console.log(role);
        }
    }, [isAuth, role])


    return (

        <AppBar position="sticky" id="appbar" sx={{ bgcolor: '#1F1F1F' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters  >
                    <Typography
                        variant="h6"
                        noWrap
                        href="/home"
                        sx={{
                            mr: 6,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'cursive',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            ml: 3
                        }}>
                        <Button
                            component={Link}
                            to="/home"
                            size="large"
                            sx={{ my: 0, color: 'white', display: 'block', fontSize: 24 }}
                        >कलाKendra

                        </Button>
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu} >
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Register</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <AdbIcon href='/home' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Typography
                        variant="h5"
                        noWrap
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 1 }}>

                        <Button
                            component={Link}
                            to='/home'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 1, color: 'white', display: 'block' }}
                        >
                            {commonPage[0]}
                        </Button>

                        {/* session storage rtrival role  */}
                        {!role &&

                            <Button
                                component={Link}
                                to="/Login"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {commonPage[1]}
                            </Button>
                        }
                        {!role &&
                            <Button
                                component={Link}
                                to="/userRegistration"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {commonPage[2]}
                            </Button>
                        }

                        {role === "artist" &&
                            <Button
                                component={Link}
                                to="/aDashboard"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {commonPage[4]}
                            </Button>
                        }
                        {role === "user" &&
                            <Button
                                component={Link}
                                to="/uDashboard"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {commonPage[5]}
                            </Button>
                        }


                        <Button
                            component={Link}
                            to="/aboutUs"
                            onClick={[handleCloseNavMenu]}
                            sx={{ my: 1, color: 'white', display: 'block' }}
                        >
                            {commonPage[3]}
                        </Button>

                        <Button
                            component={Link}
                            to="/contactUs"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 1, color: 'white', display: 'block' }}
                        >
                            {commonPage[6]}
                        </Button>









                    </Box>

                    {role &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* <MenuItem onClick={handleCloseUserMenu}> */}
                                {role === "artist" &&

                                    <Button
                                        component={Link}
                                        to="#"
                                        onClick={handleCloseUserMenu}
                                        sx={{ my: 1, display: 'block' }}
                                    >
                                        Profile
                                    </Button>
                                }

                                <Button
                                    component={Link}
                                    // to="#"
                                    onClick={logOut}
                                    sx={{ my: 1, display: 'block' }}
                                >
                                    LogOut
                                </Button>

                                {/* </MenuItem> */}


                            </Menu>
                        </Box>

                    }

                </Toolbar>
            </Container>
        </AppBar >
    )
}


export default Nav
