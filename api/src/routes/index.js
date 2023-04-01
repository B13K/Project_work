const { Router } = require("express");

const userRouter = require("./userRouter");
const rolRouter = require("./rolRouter");
const loginRouter = require("./loginRouter");

//Importar los router


const router = Router();


//Configurar los routes

router.use("/user", userRouter)
router.use("/rol", rolRouter)
router.use("/login", loginRouter)




module.exports = router