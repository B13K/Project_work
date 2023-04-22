import { useSelector } from "react-redux"
import {useState, useEffect } from "react"
import { Typography, Box, Tabs, Tab } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from "./ProfileNavBar.module.css"


const ProfileNavBar = ({value, handleChange}) => {
    
    const user = useSelector(state => state.user)
    
    const [userM, setUserM] = useState(user)

    useEffect( () => {
        if(user) {
            setUserM(user)
        }
    }, [user])

    return(
        <div className={style.profileHeaderNavBar}>           
                
                <div className={style.profileNavBarAcount}>
                    <AccountCircleIcon color="primary" sx={{fontSize: "6rem"}}/>                    
                    {/* <Avatar color="primary" sx={{width: "6rem", height: "6rem"}}/> */}
                    <div className={style.profileNavBarUser}>
                        <Typography variant="h4" sx={{color: "black"}}>
                            {user.name}
                        </Typography>
                        {user?.Rols ?   <Typography variant="h6" sx={{color: "grey"}}>Aun no tienes ningun rol asignado</Typography>
                                    :   <Typography variant="h6">{userM.Rols}</Typography>}

                    </div>
                </div>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        textColor="primary"
                        indicatorColor="primary">
                        <Tab label="P30" id={0} aria-controls={0} />
                        <Tab label="P40" id={1} aria-controls={1} />
                        <Tab label="P50" id={2} aria-controls={2} />
                    </Tabs>
                </Box>
        </div>
       
    )
}

export default ProfileNavBar