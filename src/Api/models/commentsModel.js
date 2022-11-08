module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define("postComments", {
        comment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postimg_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: true })

    return comments

}

