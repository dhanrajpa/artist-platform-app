import React, { Component, useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import { Box, Card, CardHeader, Checkbox, Button } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Post from './Post';
import axios from 'axios'

function Feed() {

  const effectRan = useRef(false);

  const [artistposts, setartistposts] = useState([]);

  const url = `http://localhost:8080/api/artist/getImage  `

  const getPosts = async () => {


    axios.get(url).then((response) => {

      // const result = response.data;
      setartistposts(response.data);




    })

  }

  useEffect(() => {
    console.log("effect ran");
    if (effectRan.current === false) {
      getPosts();
    }

    return () => {
      console.log('unmounted parent')
      effectRan.current = true
    }
  }, []);


  return (
    <Box p={2} flexDirection="column" flex={4} id="card" sx={{ display: 'flex', justifyContent: 'center' }} >
      {artistposts.map((img) => {

        const ut = "./DBimage/";
        return <Post imgs={img} />

      })}



    </Box>
  )
}

export default Feed