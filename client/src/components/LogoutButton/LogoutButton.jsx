// import { useAuth0 } from "@auth0/auth0-react";

// const LogoutButton = () => {
//     const { logout } = useAuth0();

//     return(
//         <button onClick={() => logout({logoutParamns: { returnTo: window.location.origin }})}>
//             Logout
//         </button>
//     )
// }

// export default LogoutButton

import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions"
import { useState } from "react";

const LogoutButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();


    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch(logout())
        if(location.pathname === "/dashboard"){
            return
        }
        navigate("/dashboard")
        
    }
    return(
        <button onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutButton