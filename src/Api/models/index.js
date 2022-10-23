const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    "meetartist", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
        supportBigNumbers: true
    }
}
);

sequelize.authenticate()
    .then(() => {
        console.log("Connected...");
    }).catch((err) => {
        console.log("error" + err);
    })


const db = {}


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require('./rolemodels.js')(sequelize, DataTypes);
db.users = require('./usermodels.js')(sequelize, DataTypes);
db.artists = require('./artistmodel.js')(sequelize, DataTypes);
db.events = require('./eventmodel.js')(sequelize, DataTypes);
db.likes = require('./postLikesmodel')(sequelize, DataTypes);
db.postImg = require('./postImgModel')(sequelize, DataTypes);


//assosiation
db.roles.hasOne(db.users, {
    foreignKey: 'role_id',
})

db.users.belongsTo(db.roles, {
    foreignKey: 'role_id',
})


db.roles.hasOne(db.artists, {
    foreignKey: 'role_id',
})

//roles and artist
db.artists.belongsTo(db.roles, {
    foreignKey: 'role_id',

})


db.artists.hasOne(db.events, {
    foreignKey: 'artist_id',

})
//roles and artist 
db.events.belongsTo(db.artists, {
    foreignKey: 'artist_id',
})

//img and artist one to one relationship
db.artists.hasOne(db.postImg, {
    foreignKey: 'artist_id',

})
db.postImg.belongsTo(db.artists, {
    foreignKey: 'artist_id',
})


db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done');
})



module.exports = db;
