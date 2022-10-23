const { response } = require('express');
const {postImages}  =require('../models/')
const db = require('../models');
const { artists } = require('../models/artistmodel');
//create model


const postimg = db.postImg;

const  addpostImage = async (req,res)=>{

    let info = {    
        imgdesc:req.body.imgdesc,
        postimage:req.file.filename,
        artist_id:req.body.artist_id
        
    }

    const image = await postimg.create(info);
    res.send(image);
    console.log(image);
}

const getProfileImage = async (req,res)=>{
  
       const image = await  postimg.findAll()
       res.send(image)
   }
   
module.exports={    
    addpostImage,
    getProfileImage
}