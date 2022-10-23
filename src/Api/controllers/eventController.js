const { response, request } = require('express');
const { artists } = require('../models/artistmodel');
const { roles } = require('../models/rolemodels');
const {event_desc} = require('../models/eventmodel.js');
const db = require('../models');
const { sequelize } = require('../models');

const Artist = db.artists
const Role = db.roles
const PostImg = db.postImages ;
const event = db.events;

const addEvent = async (req, res) => {
    
    let
    //  artist_id=req.body.artist_id;
    artist_id=1

    let data = {
        ename:req.body.ename,
        event_desc : req.body.event_desc,
        artist_id:artist_id
        
    }

    const eventData = await event.create(data);

    res.send(eventData)
}



const getEvent = async (req, res) => {


  const eventData = await event.findAll({});

  res.send(eventData)
}



module.exports = {
  addEvent,
  getEvent
}












