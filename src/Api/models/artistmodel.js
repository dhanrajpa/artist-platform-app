module.exports = (sequelize, DataTypes) => {
    const artists = sequelize.define("artist_details", {
        artist_id: {
            type: DataTypes.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        artform: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        role_id:{
            type: DataTypes.INTEGER
        }

    },{ timestamps: false })

    return artists
}
