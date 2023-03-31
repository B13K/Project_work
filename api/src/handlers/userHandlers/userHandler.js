
const {
    getUserAll,
    getUserById,
    getUserByNickname,
    addUser,
    modifyUser,
    deleteUserById,
} = require("../../controllers/userControllers/userController.js")


const getUsersHandler = async (req,res) => {
    const { nickname } = req.query;

    try{
        const users = nickname ? await getUserByNickname(nickname)
                               : await getUserAll();
        return res.status(200).json(users);
    }catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await getUserById(id)
        res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

const createUserHandler = async (req, res) => {
    const { name, lastname, email, nickname, rol, linea } = req.body;
    try {
        if(!name || !email) throw Error("Falta completar los datos de nombre o email")
        
        const user = await addUser(name, lastname, email, nickname, rol, linea);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const modifyUserHandler = async (req, res) => {
    const {id, name, lastname, email, password, newPassword, nickname, rol, linea} = req.body

    try{
        const user = await modifyUser(id, name, lastname, email, password, newPassword, nickname, rol, linea);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const deleteUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await deleteUserById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    modifyUserHandler,
    deleteUserByIdHandler
}