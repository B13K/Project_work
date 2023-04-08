
import style from "./Layout.module.css"
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx"
import Sidebar from "../Sidebar/Sidebar.jsx";

import Login from "../../views/Login/Login"
import SignUp from "../../views/SignUp/SignUp"
import Dashboard from "../../views/Dashboard/Dashboard";
import Profile from "../../views/Profile/Profile";
import Configuration from "../../views/Configuration/Configuration.jsx"

const Layout = () => {

    // const [location, setLocation] = useState("")
    const location = useLocation().pathname.split("/")[1] //Verifica que el path empiece con  /auth 

    return(
        <div className={style.layoutContainer}>
           {(location !== "auth") && <NavBar/>}
            <Routes>
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/signup" element={<SignUp/>} />
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/configuracion" element={<Configuration/>}/>
            </Routes>
            <Sidebar/>
        </div>
    )

}

export default Layout;