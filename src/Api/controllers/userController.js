const { response, request } = require('express');
const { users } = require('../models/usermodels');
const { roles } = require('../models/rolemodels');
const { artists } = require('../models/artistmodel');
const db = require('../models');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const User = db.users
const Role = db.roles
const Artist = db.artists

const addUser = async (req, res) => {


    let password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    let roleInfo = {
        role: req.body.role
    }

    const roleData = await Role.create(roleInfo);

    if (roleData && roleData.role) {

        let userInfo = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
            gender: req.body.gender,
            contact: req.body.contact,
            address: req.body.address,
            profession: req.body.profession,
            role_id: roleData.role_id

        }

        const userData = await User.create(userInfo);


        res.status(200).send(userData)

    }



}


const checkLogin = async (req, res) => {

    let cEmail = req.body.email;

    let cPassword = req.body.password;

    const user = await User.findOne({ where: { email: cEmail } });
    const artist = await Artist.findOne({ where: { email: cEmail } });

    if (user) {
        const passwordValidate = await bcrypt.compareSync(cPassword, user.password)
        if (passwordValidate) {
            // const role = "user";
            const token = jwt.sign(user.toJSON(), 'the-super-strong-secrect', { expiresIn: '1h' }, (err, token) => {
                // const role =
                res.send({ accessToken: token });
            });
        } else {
            res.send({ message: "wrong password" });
        }

    } else if (artist) {
        const passwordValidate = await bcrypt.compareSync(cPassword, artist.password)
        if (passwordValidate) {
            const role = "artist";
            const token = jwt.sign(artist.toJSON(), 'the-super-strong-secrect', { expiresIn: '1h' });
            res.send({ accessToken: token, role: role });


        } else {
            res.send({ message: "wrong password" });
        }
    } else {
        res.send({ message: "Not Registered" })
    }

}


const authDetails = async (req, res) => {

    let cEmail = req.body.email;

    let cPassword = req.body.password;

    const Query =
        `	select user_details.user_id as id,user_details.name,role,roles.role_id as role_id, email,password from roles INNER JOIN user_details on roles.role_id=user_details.role_id
    where email="${cEmail}"
    union
    select artist_details.artist_id as id,artist_details.name,role,roles.role_id as role_id,email,password from roles INNER JOIN artist_details on roles.role_id=artist_details.role_id
    where email="${cEmail}"
    ;`

    const data = await sequelize.query(Query)

    const Credentials = data[0];
    //validate credentials
    if (Credentials) {

        const passwordValidate = await bcrypt.compare(cPassword, Credentials[0].password)


        if (passwordValidate) {

            delete Credentials[0].password;


            const token = jwt.sign(Credentials[0], 'the-super-strong-secrect', { expiresIn: '1h' });

            res.send({
                auth: passwordValidate,
                accessToken: token,
                role: Credentials[0].role
            });

        } else {
            res.status(404).send("user not found"
            );
        }
    }
}





const userRegisterCheck = async (req, res) => {


    const daaa = await User.findAll({ attributes: ['email'] });

    let email = req.body.name;
    daaa.map((i) => {
        if (email === i) {
            return "email valid";
        } else {
            return "email not registered"
        }
    })

}

// function createJWT(data){
//     const Token = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET);
//     return Token;
// }
// 
module.exports = {
    addUser,
    checkLogin,
    userRegisterCheck,
    authDetails
}





