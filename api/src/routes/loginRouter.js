const { Router } = require("express")
const jwtCheck = require("../middleware/jwtAuth0.js")
const { Login, SignUp } = require("../handlers/loginHandler/loginHandler.js")

const loginRouter = Router()

// loginRouter.get("/login", jwtCheck,  function(req,res) {
//     res.status(200).json({status: "Todo funciona bien"})
// })

loginRouter.post("/login", Login)
loginRouter.post("/signup", SignUp)
// loginRouter.get("/", jwtCheck, Login)
// loginRouter.post("/", jwtCheck, SignUp)



module.exports = loginRouter;