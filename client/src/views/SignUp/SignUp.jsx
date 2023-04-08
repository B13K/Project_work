import style from "./SignUp.module.css"
import logo from "../../../images/logo.png"
import AlertDialog from "../../components/AlertDialog/AlertDialog"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUp } from "../../redux/actions"
import { signUpService } from "../../services/message.service";
import { Button, TextField} from "@mui/material";

const SignUp = () => {

    const initialUser = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        nickname: "",
    }

    const [userForm, setUserForm ] = useState(initialUser)
    const [open, setOpen ] = useState(false)
    const [error, setError] = useState("")

    const dispatch = useDispatch();

    const onOpenHandler = () => {
        setOpen(false)
    }

    const onChangeHandler = (e) => {
        const { name, value} = e.target

        // Pendiente realizar validaciones

        setUserForm({...userForm, [name]: value})

    }

    const signUpSubmit = async (e) => {
        e.preventDefault();
        const data = await signUpService(userForm)
        if(data.error){
            setError(data.error)
            setOpen(true)
            return
        }
        dispatch(signUp(data.data.user))
        localStorage.setItem("token", data.data.token)
        setUserForm(initialUser)

    }
    return (
        <div className={style.signUpContainer}>
            <div className={style.signUpCard}>
                <h1 className={style.signUpTitle}>Project Work</h1>
                <div className={style.signUpBody}>
                    <img src={logo} alt="logo de la pagina" className={style.signUpLogo}/>
                    <form className={style.signUpForm} onSubmit={signUpSubmit}>
                        <TextField label="Nombre" name="name" type="text" value={userForm.name} onChange={onChangeHandler}/>
                        <TextField label="Apellido" name="lastname" type="text" value={userForm.lastname} onChange={onChangeHandler}/>
                        <TextField label="Correo" name="email" type="text" value={userForm.email} onChange={onChangeHandler}/>
                        <TextField label="Password" name="password" type="password" value={userForm.password} onChange={onChangeHandler}/>
                        <TextField label="Alias" name="nickname" type="text" value={userForm.nickname} onChange={onChangeHandler}/>
                    </form>
                </div>                
                <Button variant="contained" onClick={signUpSubmit}>Registrar</Button>
            </div>
            <AlertDialog 
            title="Error"
            content={error}
            onClose={onOpenHandler}
            open={open}
            />
        </div>
    )
}

export default SignUp