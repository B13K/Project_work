//Importamos el router index
const express = require("express")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const morgan = require("morgan")
const routes = require("./routes/index.js")

const cors = require("cors");

require("./db.js");

const server = express();

server.name = "Project Work";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}));
server.use(bodyParser.json({limit: "50mb"}));
server.use(cookieParser())
server.use(morgan("dev"))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


// auth0
  server.use((req, res, next) => {
    res.contentType("application/json; charset=utf-8");
    next();
  });

  // server.use((req,res,next) => {
  //   console.log(req.headers)
  //   next()
  // })

  
// server.use(
//   cors({
//     origin: "*",
//     methods: ["GET"],
//     allowedHeaders: ["Authorization", "Content-Type"],
//     credentials:true, 
//     maxAge: 86400,
//   })
// );

server.use("/", routes);

  //Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;