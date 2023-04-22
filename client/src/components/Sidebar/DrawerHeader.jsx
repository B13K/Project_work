import logo from "../../../images/logo.png"
import style from "./Sidebar.module.css"
import {
    Box, Typography
} from "@mui/material"



const DrawerHeader = () => {
    
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img src={logo} alt="imagen del logo" className={style.DrawerHeaderLogo}/>
            <Typography >
                Project Work
            </Typography>
        </Box>
    )
}


export default DrawerHeader;