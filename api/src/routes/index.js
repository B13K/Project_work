const { Router } = require("express");

const userRouter = require("./userRouter");
const rolRouter = require("./rolRouter");

//Importar los router


const router = Router();


//Configurar los routes

router.use("/user", userRouter)
router.use("/rol", rolRouter)




module.exports = router