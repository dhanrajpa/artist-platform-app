import React, { useEffect, useState } from 'react';
import { Box, List } from '@mui/material';

import Typography from '@mui/material/Typography';
import EventCard from './EventCard';
import axios from 'axios';

function Rightbar() {

  const [event, setevent] = useState([]);

  const getEvent = () => {



    const url = `http://localhost:8080/api/artist/artistDashBoard/events/getEvent`

    axios.get(url).then((response) => {

      const result = response.data

      setevent(result)

    })

  }

  useEffect(() => {
    getEvent();
  }, [event]);


  return (

    <Box bgcolor="white" sx={{ display: { sm: "none", md: "block", xs: "none" }, bgcolor: "green" }} flex={2} flexDirection="row" p={2} >


      <Box bgcolor="white" position="fixed">
        <Typography gutterBottom variant="h5" component="div">
          Upcomming Events
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {event.map((ev) => {
            return <EventCard events={ev} />
          })}

        </List>
      </Box>
    </Box>
  )
}

export default Rightbar