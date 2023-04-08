
const { login, signUp} = require("../../controllers/loginControllers/loginController.js")


const Login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const data = await login(email, password)
        return res.status(200).json(data)
    }catch (error) {
        return res.status(400).json({data: null, error: error.message})   
    }
}

const SignUp = async (req, res) => {
    const { name, lastname, email, password, nickname } = req.body;
    try{
        const data = await signUp(name, lastname, email, password, nickname);
        return res.status(200).json(data)
    } catch ( error ) {
        return res.status(400).json({data: null, error: error.message})
    }
}

module.exports = {
    Login,
    SignUp
}