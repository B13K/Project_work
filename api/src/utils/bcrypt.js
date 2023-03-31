const bcrypt = require("bcrypt")

const salt_rounds = 10;
const pass_default = "12345";

const createHash = async(password) => {
    if(!password){
        password = pass_default;
    }
    const passHash = await bcrypt.hash(password, salt_rounds);
    return passHash;
}

const checkPassword = async (passwordDb, password) => {
    const isCheck = await bcrypt.compare(passwordDb, password)
    return isCheck;
}

module.exports = {
    createHash,
    checkPassword
}