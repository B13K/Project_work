const {
    getRoles,
    getRolUsers,
    addRol,
    modifyRol,
    deleteRol
} = require("../../controllers/rolControllers/rolController.js")

const getRolesHandler = async (req, res) => {
    try {
        const roles = await getRoles();
        return res.status(200).json(roles);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    try{
        const rolusers = await getRolUsers(id);
        return res.status(200).json(rolusers)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const createRol = async (req, res) => {
    const { name } = req.body;
    try {
        const rol = await addRol(name);
        res.status(200).json(rol)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const updateRol = async (req, res) => {
    const { id, name } = req.body;
    try {
        const rol = await modifyRol(id, name);
        return res.status(200).json(rol)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const deleteRolHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await deleteRol(id);
        return res.status(200).json(message)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    getRolesHandler,
    getById,
    createRol,
    updateRol,
    deleteRolHandler
}