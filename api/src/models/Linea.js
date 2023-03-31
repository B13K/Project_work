const { DataTypes } = require("sequelize")

module.exports = (secuelize) => {
    secuelize.define("Linea", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    })
}