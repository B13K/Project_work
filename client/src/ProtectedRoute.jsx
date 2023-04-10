import AlertDialog from "./components/AlertDialog/AlertDialog"

import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    const navigate = useNavigate();

    const [open, setOpen ] = useState(true)
    const user = useSelector(state => state.user)

    const onClose = () => {
        setOpen(false)
        navigate("/auth/login")
    }

    return (
        <div>
            { !user ? <AlertDialog    title="Necesitas iniciar sesion"
                            content="Para visualizar esta pagina necesitas regitrarte e iniciar sesion"
                            onClose={onClose}
                            open={true} /> 
                    : <Outlet/>
            
            }
           
        </div>
    )
}

export default ProtectedRoute