module.exports = (sequelize, DataTypes) => {
    const likes = sequelize.define("postLikes", {
        like_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        //count 
        // likes: {
        //     type: DataTypes.STRING
        // },
        postimg_id: {
            type: DataTypes.INTEGER,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: true })

    return likes
}

