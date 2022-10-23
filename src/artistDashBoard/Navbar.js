import { AppBar, Toolbar, Box, Typography, styled, InputBase, Avatar, Menu, MenuItem, Link } from '@mui/material'
import React, { useState } from 'react'
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    display: "none",
    alignItems: 'center',
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const Userbox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

function Navbar() {
    const [open, setopen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >
                    कलाKendra
                </Typography>
                <TheaterComedyRoundedIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search" /></Search>
                <Icons sx={{ mr: 2 }}>
                    <Avatar sx={{ width: 30, height: 30 }} src={require("../images/thorDada.webp")} onClick={e => setopen(true)} />
                </Icons>
                <Userbox onClick={e => setopen(true)} >
                    <Avatar sx={{ width: 30, height: 30 }} src="../images/thorDada.webp" />
                    <Typography>Dhanraj</Typography>
                </Userbox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setopen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem ><Link href="/logout">Logout</Link></MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar