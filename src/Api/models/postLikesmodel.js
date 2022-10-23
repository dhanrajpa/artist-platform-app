module.exports = (sequelize, DataTypes) => {
    const likes = sequelize.define("postLikes", {

        like_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        likes: {
            type: DataTypes.STRING
        },
        postimg_id:{
            type: DataTypes.INTEGER,
           }
    },{ timestamps: false })
    
    return likes
}

