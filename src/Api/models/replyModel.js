module.exports = (sequelize, DataTypes) => {
    const replies = sequelize.define("replies_postComments", {

        reply_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reply: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: true })

    return replies

}

