import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Nav from './Nav';
import Footer from './Footer';
// import '../css/ContactUs.css'


function Contactus() {
    const myStyle = {
        backgroundImage:
            "url('https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_960_720.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            {/* <Nav/> */}
            <div id='contact_us' style={myStyle}>
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h2>Contact Us</h2>
                        </Typography><br />
                        <Typography variant="body2" color="text.secondary">
                            <HomeIcon />Pune, kalyani Nagar<br /><br />
                            <CallIcon />+ 91 234 567 89<br /><br />
                            <MailIcon />admin@कलाKendra.com<br />
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            <Footer />
        </>
    )
}

export default Contactus