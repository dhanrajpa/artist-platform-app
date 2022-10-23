const { response, request } = require('express');
const { artists } = require('../models/artistmodel');
const { roles } = require('../models/rolemodels');
const db = require('../models');
const { sequelize } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const {verify} from './userController.js'
const Artist = db.artists
const Role = db.roles
const PostImg = db.postImages;

const addArtist = async (req, res) => {
    let password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    let roleInfo = {
        role: req.body.role
    }

    const roleData = await Role.create(roleInfo);

    if (roleData && roleData.role) {

        let artistInfo = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
            gender: req.body.gender,
            contact: req.body.contact,
            artform: req.body.artform,
            role_id: roleData.role_id

        }

        const artistData = await Artist.create(artistInfo);


        res.status(200).send(artistData);

    }




}

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "the-super-strong-secrect", (err, payload) => {
            if (err) {
                return res.status(403).send("token not valid");
            }

            req.payload = payload
            next();
        });

    } else {
        res.status(401).send("You are not authenticated!")
    }
}


const getAllArtistPostIMages = async ( req, res) => {
    if (verify) {

    }
    // let artist_id = 2;
    // const data = await Artist.findAll({
    //     include: [{
    //         model: PostImg,

    //     }],
    //     where: { artist_id: artist_id }
    // })
    // res.send(data)


}

module.exports = {
    addArtist,
    getAllArtistPostIMages,
    verify
}












