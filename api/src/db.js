require("dotenv").config();

const { Sequelize } = require("sequelize");
const fs = require("fs")
const path = require("path")
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DATABASE
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring



// const { Dog, Temperament } = sequelize.models;
const { User, Linea, Rol, Maquina } = sequelize.models; //Definimos



// Aca vendrian las relaciones

// Relacion de muchos a muchos entre la tabla User y Rol
User.belongsToMany(Rol, {through: "UserRol", timestamps: false });
Rol.belongsToMany(User, {through: "UserRol", timestamps: false })

// Relacion de muchos a muchos entre la tabla User y Linea
User.belongsToMany(Linea, { through: "UserLinea", timestamps: false});
Linea.belongsToMany(User, { through: "UserLinea", timestamps: false});

// Relacion de muchos a muchos entre la tabla Linea y Maquina
Linea.belongsToMany(Maquina, { through: "LineaMaquina", timestamps: false});
Maquina.belongsToMany(Linea, { through: "LineaMaquina", timestamps: false});




module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};