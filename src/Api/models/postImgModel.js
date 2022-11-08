module.exports = (sequelize, DataTypes) => {
    const postImage = sequelize.define("postImages", {

        postimg_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,

            primaryKey: true
        },
        postimage: {
            type: DataTypes.STRING
        },
        imgdesc: {
            type: DataTypes.STRING,

        },
        artist_id: {
            type: DataTypes.INTEGER
        }

    }, { timestamps: false })

    return postImage
}

