import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./Sidebar.module.css"
import { openSidebar } from "../../redux/actions"
import LogoutButton from "../LogoutButton/LogoutButton"
import {Link, NavLink} from "react-router-dom"



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Divider, Icon, IconButton, List, ListItem, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import DrawerHeader from "./DrawerHeader"

const Sidebar = ({routes}) => {
    const drawerWidth = 400;

    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.sidebar)
    const [open, setOpen] = useState(false)
    
    const openHandler = () => {
        dispatch(openSidebar(false))
    }

    useEffect( () => {
        setOpen(sidebar)
    }, [sidebar])

    const routerRender = routes.map(({type, name, key, path, icon, component, title}) => {
        if(type === "collapse"){
            return <NavLink to={path} key={key}>
                <List sx={{display: "flex", alignItems: "center"}}>
                    <Icon>
                        {icon}
                    </Icon>
                    <ListItem>{name}</ListItem>
                </List>
                </NavLink>
        }else if(type === "title"){
            return <Typography key={key}>{title}</Typography>
        }
    })


    

    return (
        // <div className={style.sidebarContainer}>
        <Box sx={{width: {sm: drawerWidth}, flexShrink: { sm: 0 }}}>
            {/* <Button onClick={openHandler}>Abrir</Button> */}
            <Drawer
                anchor="left"
                open={open}
            >
                <div className={style.sidebarDrawerHeader}>
                    <DrawerHeader/>
                    <IconButton onClick={openHandler}>
                        <ArrowBackIosIcon size="12px"/>
                    </IconButton>
                </div>
                <Divider variant="middle"/>
                {routerRender}
                <LogoutButton/>
            </Drawer>

        </Box>
    )
}

export default Sidebar