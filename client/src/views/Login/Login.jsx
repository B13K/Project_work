import style from "./Login.module.css"
import logo from "../../../images/logo.png"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// import {useDispatch, use} from "react-dom"
import TextField from '@mui/material/TextField';
import { Button, Link } from "@mui/material";

import { login } from "../../redux/actions"
import { loginService } from "../../services/message.service"
import AlertDialog from "../../components/AlertDialog/AlertDialog"

const Login = () => {

    const initialLogin = {
        email: "",
        password: ""
    }

    const [loginForm, setLoginForm] = useState(initialLogin)
    const [error, setError] = useState("")
    const [dialogOpen, setDialogOpen ] = useState(false)

    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClose = () => {
        setDialogOpen(false)
    }


    const loginChange = (e) => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm, [name]: value
        })
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = await loginService(loginForm.email, loginForm.password)
        if(data.error){
            setError(data.error)
            setDialogOpen(true)
            return
        }
        dispatch(login(data.data.user))
        let user = {...data.data.user}
        localStorage.setItem("token", JSON.stringify(data.data.token))
        localStorage.setItem("user", JSON.stringify(user))
        setLoginForm(initialLogin)
        navigate("/dashboard") //Para regresar al inicio despues del login
    }

    const onNavigateSignUp = () => {
        navigate("/auth/signup")
    }

    return (
        <div className={style.loginContainer}>
            <div className={style.loginCard}>
                <h1 className={style.loginTitle}>Project Work</h1>
                <div className={style.loginBody}>
                    <img src={logo} alt="logo de la pagina" className={style.loginLogo}/>
                    <form  className={style.loginForm}>
                        <TextField label="Email"
                                    type="text"
                                    name="email"
                                    value={loginForm.email}
                                    onChange={loginChange}>                    
                        </TextField>
                        <TextField label="Password"
                                    type="password"
                                    name="password"
                                    value={loginForm.password}
                                    onChange={loginChange}>                    
                        </TextField>
                    </form>
                </div>
                <div className={style.loginButtons}>
                    <Button variant="contained" onClick={onNavigateSignUp}>Registrar</Button>
                    <Button variant="contained" onClick={loginSubmit}>Login</Button>
                </div>
            </div>
            <AlertDialog 
                title="Error"
                content={error}
                onClose={handleClose}
                open={dialogOpen}
             />
        </div>
    )
}

export default Login