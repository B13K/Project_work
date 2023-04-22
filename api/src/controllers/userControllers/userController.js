const { User, Rol, Linea, Maquina } = require("../../db.js")
const { createHash, checkPassword } = require("../../utils/bcrypt.js")


const attr = ["id", "name", "lastname", "email", "nickname"]

const getUserAll = async () => {
    const users = await User.findAll({
        atrributes: attr
    });
    return users;
}

const getUserById = async (id) => {
    const user = await User.findOne({
        where: {
            id: id
        },
        atrributes: attr,
        include: [
            {
                model: Rol,
                through: {
                    attributes: []
                }
            },
            {
                model: Linea,
                through: {
                    attributes: []
                }
            }
        ]
    })

    if(!user) return `No se encontro al usuario con el id = ${id}`
    return user;
}

const getUserByNickname = async (nickname) => {
    const hasNick = await User.findOne({
        where: {
            nickname: nickname
        },
        attributes: attr
    })

    return hasNick;
}

const addUser = async (name, lastname, email, nickname, rol, linea) => {
    const newHash = await createHash();
    let newUser;
    try{
        newUser = await User.create({email, name, lastname, nickname, password: newHash});

    } catch (err){

        console.log(err)
    }
    if(rol) {
        await newUser.addRol(rol)
    }
    if(linea) {
        await newUser.addLinea(linea)
    }

    return newUser
}

const modifyUser = async (id, name, lastname, email, nickname, rol, linea) => {
    const user = await User.findByPk(id, {
        attributes: attr,
        include: [
            {
                model: Rol,
                through: {
                    attributes: []
                }
            },
            {
                model: Linea,
                throught: {
                    attributes: []
                }
            }
        ]
    })

    if(!user) throw Error(`El id = ${id}, no existe`)
    user.set({
        name: name,
        lastname: lastname,
        email: email,
        nickname: nickname,
    })
    
    await user.save();
    if(rol) await user.setRols(rol);
    if(linea) await user.setLineas(linea);
    
    return user
}

const deleteUserById = async (id) => {
    const user = await User.findByPk(id);

    if(!user) throw Error(`El usuario con el id = ${id}, no existe`);

    await user.destroy();

    return `El usuario con el id = ${id}, fue eliminado`
}


module.exports = {
    getUserAll,
    getUserById,
    getUserByNickname,
    addUser,
    modifyUser,
    deleteUserById,
}
