module.exports = (sequelize, DataTypes) => {
    const events = sequelize.define("event_details", {
        event_id: {
            type: DataTypes.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true
        },
        ename: {
            type: DataTypes.STRING,
            allowNull: false
        },

        event_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_id:{
            type: DataTypes.INTEGER
        }
    },{ timestamps: false })

    return events
}
