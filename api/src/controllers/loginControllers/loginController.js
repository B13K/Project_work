const { User, Rol, Linea } = require("../../db.js")
const { createHash, checkPassword } = require("../../utils/bcrypt.js")
const { createToken } = require("../../middleware/authJWT.js")

const attr = ["id", "name", "lastname", "email", "password", "nickname"]


const login = async (email, password) => {
    const user = await User.findOne({
        where: {
            email: email
        },
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
    });

    if(!user) {
        throw Error(`No existe un usuario con el email = ${email}`)
    }

    const isPassword = await checkPassword(user.password, password)

    if(!isPassword){
        throw Error("Passoword incorrecto")
    }
    const data = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        nickname: user.nickname,
        Rols: user.Rols
    }
    const token = await createToken(user)
    console.log(user)
    return {user: data, token};
}

const signUp = async (name, lastname, email, password, nickname) => {
    const isUser = await User.findOne({
        where: {
            email: email
        }
    })

    if(isUser) {
        throw Error(`Ya existe un usuario con el email = ${email}`)
    }
    const hash = await createHash(password)
    const user = await User.create({name, lastname, email, password: hash, nickname })
    const data = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        nickname: user.nickname
    }
    const token = await createToken(data)
    return {user: data, token};

}

module.exports = {
    login,
    signUp
}