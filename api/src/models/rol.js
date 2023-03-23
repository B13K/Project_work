const { DataTypes } = require("sequelize")

//Exportamos la funcion que define el modelo
//Ñuego injectamos al conexion a sequelize

module.exports = (sequelize) => {
    sequelize.define("Rol", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}