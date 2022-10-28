import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Typography } from '@mui/material';
import '../Scss/ArtistDashboard/EventDetails/Artistevent.css'
import axios from 'axios';
function EventCard(props) {

    const events = { props }
    
    const handleClick = async (event) => {

        event.preventDefault();
            let checkemail = "kunalremo23@gmail.com ";

        let data =
        {
            email: checkemail,
        }
        
        axios.post("http://localhost:8080/api/emailsent/quersent", data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                
            }).catch((err) => console.log(err + "Incorrect Data"));

     

    };
    


    return (

        <ListItem alignItems="flex-start" id="event_list" sx={{mt:2}}>

            <ListItemText
                primary={props.events.ename}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            
                        >
                            {props.events.event_desc}
                            <br/>
                            Click here for
                            <Button onClick={handleClick}>Register</Button>
                        </Typography>
                        <br/>
                        
                    </React.Fragment>
                }
            />
        </ListItem>

    )
}

export default EventCard