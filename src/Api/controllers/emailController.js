const { response, request } = require('express');
const { artists } = require('../models/artistmodel');
const { roles } = require('../models/rolemodels');
const db = require('../models');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const user = db.users
const Artist = db.artists
const Role = db.roles
const PostImg = db.postImages;


const emailRegister = async (req, res) => {

    const email = req.body.email;


    const transporter = nodemailer.createTransport({
        host: "172.27.172.202",
        port: 25,
        secure: false,
        auth: {
            user: "Trng2@evolvingsols.com",
            pass: "Cybage@#123"
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let query = "select email,age from artist_details where email=?";
        const output = await Artist.findAll({where:{email:email}})
        // res.send(results);

    // sequelize.query(query, email, (err, output) => {
        if (output) {
            if (output.length <= 0) {
                return res.status(200).json({ message: "password sent succesfully to your email" });
            }
            else {
                let mailOptions = {
                    from: "Trng2@evolvingsols.com",
                    to: output[0].email,
                    subject: 'Reg Enquiry ',
                    html: '<p><b>pl confirm the user for eventy</b><br><b>Email: </b>' + output[0].email + '<br><b>Age: </b>' + output[0].age + '<br><b>Age: </b>' + output[0].gender + '<br></p>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Email sent' + info.response);
                    }
                });
                return res.status(200).json({ message: "password sent succesfully to your email" });

            }
        }
        else {
            return res.status(500).json(err);
        }
    // })
}

module.exports = {
    emailRegister,
}



