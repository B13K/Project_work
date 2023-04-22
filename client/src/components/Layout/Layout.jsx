
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

import routes from "../../routes.jsx"

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
    

    const getRoutes = (routers) => routers.map((route) => {
        if(route.isProtected){
            return (<Route key={route.key} element={<ProtectedRoute />}>
                <Route path={route.path} element={route.component} />
            </Route>)
        } 
        return (<Route path={route.path} element={route.component} key={route.key} />)
    
    })
         
    

    return(
        <Box className={style.layoutContainer} onClick={onClickHandler}>
           {!((location === "auth") || (location === "profile")) && <NavBar/>}
           {/* <NavBar/> */}
            <Routes>
                {getRoutes(routes)}
                <Route path="/" element={<Navigate to="/dashboard" />}/>
            </Routes>
            <Sidebar routes={routes}/>
        </Box>
    )

}

export default Layout;