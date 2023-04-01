const { Router } = require("express")
const jwtCheck = require("../middleware/jwt.js")

const loginRouter = Router()

loginRouter.get("/public", function(req,res) {
    res.status(200).json({status: "Todo funciona bien"})
})

loginRouter.get("/private", jwtCheck, function(req, res) {
    res.status(200).json({status: "Ingresaste a la ruta protegida"})
})



module.exports = loginRouter