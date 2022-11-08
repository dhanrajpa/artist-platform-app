const db = require('../models');
const { response, request } = require('express');
const { artists } = require('../models/artistmodel');
const { roles } = require('../models/rolemodels');
const { sequelize, postImg } = require('../models');
const { postComments } = require('../models/commentsModel')
const { likes } = require('../models/postLikesmodel')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const {verify} from './userController.js'

const Artist = db.artists
const Role = db.roles
const LikesPost = db.likes;
const Comment = db.comments;

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



/**
 * * Toggle Like added on post id as per authenticated role 
 * @param {postid}  
 * @param {role_id}  req store likes per post  
 */

const getLikes = async (id) => {

    const postId = id;

    const data = await LikesPost.findAndCountAll({
        where: {
            postImg_id: postId
        }
    })

    return { likes: data.count }
}

const addLikes = async (req, res) => {
    const postImg_id = req.params.postId;

    const { role_id } = req.payload;

    const likedRole = {
        postimg_id: postImg_id, role_id: role_id
    };

    const result = await LikesPost.findOne({
        where: {
            role_id: role_id

        }
    })

    if (result) {
        await result.destroy().then(() => {
            return getLikes(postImg_id)
        })

        getLikes(postImg_id).then(
            (data) => {
                res.send(data)
            }
        )
    } else {
        await LikesPost.create(likedRole).then(() => {
            getLikes(postImg_id).then(
                (data) => {
                    res.send(data)
                }
            )
        })
    }
}


/**
 * 
 * TODO : update with new comment while showing previous one
 */

const editComment = async (req, res) => {
    const comment_id = req.params.commentID;
    const comments = req.body.comments;



    //if exist then update 
    const result = await Comment.findOne(
        {
            where: {
                comment_id: comment_id
            }
        }
    )
    if (result)
        await result.update({
            comments: comments
        })
    res.send("done");
}


const delComment = async (req, res) => {
    const comment_id = req.params.commentID;

    const result = await Comment.findOne({
        where: {
            comment_id: comment_id
        }
    })

    if (result) {
        await result.destroy() //delete if availiable
        res.send("done");
    } else {
        res.send("no data found")
    }
}

/**
 * * params postId used for getting artist details for Artist Dashboard
 
*/

const addComment = async (req, res) => {
    const postimg_id = req.params.postId;
    const token = req.payload
    const { role_id } = token
    const comments = req.body.comments;
    const data = {
        postimg_id: postimg_id, comments: comments, role_id: role_id
    };
    const result = await Comment.create(data);
    res.send(result);

}

//Artist Dashboard post Details

/**
 * * params id used for getting artist details for Artist Dashboard
*/
const getPostDetails = async (req, res) => {
    const d = req.params.artistId;
    //* highlighted
    const results = await postImg.findAll(
        {
            include: [
                {
                    model: db.artists,
                    as: "artist_detail",
                    attributes: ['name']
                },
                {
                    model: db.comments,
                    as: "postComments",
                    attributes: ['comments', "comment_id"]
                },
                // {
                //     model: db.likes,
                //     as: 'postLikes',
                //     attributes: ['likes']
                // }
            ],
            where: { artist_id: d }
        })
    res.send(results); //! Destructure response in comments images and likes
}




module.exports = {
    addArtist,
    addComment,
    verify,
    editComment,
    delComment,
    getPostDetails,
    getLikes,
    addLikes
}













