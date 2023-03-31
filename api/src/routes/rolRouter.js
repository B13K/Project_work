const { Router } = require("express")
const {
    getRolesHandler,
    getById,
    createRol,
    updateRol,
    deleteRolHandler
} = require("../handlers/rolHandlers/rolHandler.js")

const rolRouter = Router();

rolRouter.get("/", getRolesHandler)
rolRouter.get("/:id", getById)
rolRouter.post("/", createRol)
rolRouter.put("/", updateRol)
rolRouter.delete("/:id/delete", deleteRolHandler)

module.exports = rolRouter;