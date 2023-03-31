const { Router } = require("express");
const {
    getUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    modifyUserHandler,
    deleteUserByIdHandler
} = require("../handlers/userHandlers/userHandler.js")

const userRouter = Router();


userRouter.get("/", getUsersHandler)
userRouter.get("/:id", getUserByIdHandler)
userRouter.post("/", createUserHandler)
userRouter.put("/", modifyUserHandler)
userRouter.delete("/:id/delete", deleteUserByIdHandler)

module.exports = userRouter;