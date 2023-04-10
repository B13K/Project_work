
import style from "./Layout.module.css"
import Box from '@mui/material/Box';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../../redux/actions";
import NavBar from "../NavBar/NavBar.jsx"
import Sidebar from "../Sidebar/Sidebar.jsx";

import Login from "../../views/Login/Login"
import SignUp from "../../views/SignUp/SignUp"
import Dashboard from "../../views/Dashboard/Dashboard";
import Profile from "../../views/Profile/Profile";
import Configuration from "../../views/Configuration/Configuration.jsx"
import ProtectedRoute from "../../ProtectedRoute";

const Layout = () => {

    const dispatch = useDispatch()
    // const [location, setLocation] = useState("")
    const location = useLocation().pathname.split("/")[1] //Verifica que el path empiece con  /auth 
    const sidebar = useSelector(state => state.sidebar)
    const onClickHandler = () => {
        if(sidebar){
            dispatch(openSidebar(false))
        }
        
    }

    return(
        <Box className={style.layoutContainer} onClick={onClickHandler}>
           {(location !== "auth") && <NavBar/>}
           {/* <NavBar/> */}
            <Routes>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/configuracion" element={<Configuration/>}/>
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/signup" element={<SignUp/>} />
                <Route path="*" element={<Navigate to="/dashboard"/>}/>
            </Routes>
            <Sidebar/>
        </Box>
    )

}

export default Layout;