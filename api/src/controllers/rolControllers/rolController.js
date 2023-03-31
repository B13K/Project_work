const { Rol, User } = require("../../db")

const getRoles = async () => {
    const roles = await Rol.findAll();
    return roles;
}

const getRolUsers = async (id) => {
    const rollUsers = await Rol.findAll({
        where: {
            id: id
        },
        include: {
            model: User,
            attributes: ["id", "name", "nickname", "email"],
            through: {
                attributes: []
            }
        }
    })

    return rollUsers;

}

const addRol = async (name) => {
    const newRol = await Rol.create({name})
    return newRol;
}

const modifyRol = async (id, name) => {
    const rol = await Rol.findByPk(id)
    if(!rol) throw Error(`No existe rol con el id = ${id}`)
    rol.name = name;
    await rol.save();

    return rol;
}

const deleteRol = async (id) => {
    const rol = await Rol.findByPk(id);
    if(!rol) throw Error(`No existe rol con el id = ${id}`)
    await rol.destroy();
    return `Rol con el  id = ${id} fue eliminado`
}

module.exports = {
    getRoles,
    getRolUsers,
    addRol,
    modifyRol,
    deleteRol
}