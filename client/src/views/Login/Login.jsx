import {useState} from "react"
import { useDispatch } from "react-redux"
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
        localStorage.setItem("token", data.data.token)
        setLoginForm(initialLogin)
    }

    return (
        <div>
            <form onSubmit={loginSubmit}>
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
                <Button type="submit" variant="contained"> Login</Button>
                
            </form>
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