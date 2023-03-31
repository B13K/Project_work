const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Maquina", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
}