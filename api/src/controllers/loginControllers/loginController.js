const { User, Rol } = require("../../db.js")

const login = async (email, password) => {
    const user = await User.findOne({
        where: {
            email: email
        },
        include: {
            model: Rol,
            through: {
                atrributes: []
            }
        }
    });




}