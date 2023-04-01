import style from "./NavBar.module.css"
import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "../LoginButton/LoginButton.jsx"
import LogoutButton from "../logoutButton/logoutButton.jsx"

const NavBar = () => {

    const { isAuthenticated } = useAuth0();


    return(
        <div className={style.navContainer}>
            {isAuthenticated    ? <LogoutButton/>
                                : <LoginButton/>}
        </div>
    )
}

export default NavBar