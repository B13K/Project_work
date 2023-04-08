import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./Sidebar.module.css"
import { openSidebar } from "../../redux/actions"
import {Link} from "react-router-dom"


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const Sidebar = () => {
    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.sidebar)
    const [open, setOpen] = useState(false)
    
    const openHandler = () => {
        dispatch(openSidebar(false))
    }

    useEffect( () => {
        setOpen(sidebar)
    }, [sidebar])


    

    return (
        <div className={style.sidebarContainer}>
            {/* <Button onClick={openHandler}>Abrir</Button> */}
            <Drawer
                anchor="left"
                open={open}
            >
                <Button onClick={openHandler}>Cerrar</Button>
                <h1>Hola mundo</h1>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/configuracion">Configuracion</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/signup">SignUp</Link>
            </Drawer>

        </div>
    )
}

export default Sidebar