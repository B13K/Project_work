const jwt = require("jsonwebtoken")
require("dotenv")
const { JWT_KEY } = process.env

const day = Math.floor(Date.now()/1000) //Fecha en segundos

const createToken = (user) => {
    const payload = {
        "sub": user.id,
        "user": user.name,
        "email": user.email,
        "roles": user.roles,
        "iat": day,
        "exp": day + (60*60*24*3) //hoy + 60 segundos * 60 minutos * 24 horas * 3 dias
    }
    
        console.log(JWT_KEY)

    const token = jwt.sign(payload, JWT_KEY)
    return token
}


module.exports = {
    createToken
}