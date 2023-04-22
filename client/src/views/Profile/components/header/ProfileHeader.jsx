import style from "./ProfileHeader.module.css"
import ProfileNavBar from "../NavBar/ProfileNavBar"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import HomeIcon from "../../../../components/Icons/HomeIcon"
import { AppBar, Toolbar, Typography, Box, Icon, Tabs, IconButton } from "@mui/material"




const ProfileHeader = ({children}) => {
    
    const location = useLocation()
    const navigate = useNavigate()

    const homeNavigateHandler = () => {
        navigate("/")
    }
    
    return (
        <>
            <div className={style.profileHeaderContainer} >
                <div className={style.profileHeaderPath}>
                <IconButton onClick={homeNavigateHandler}>
                    <HomeIcon sx={{color: "white"}} fontSize="large"/>
                </IconButton>
                <Typography variant="h5" color="white">
                    {location.pathname}
                </Typography>

                </div>
                {children}
            </div>
        </>
    )
}

export default ProfileHeader