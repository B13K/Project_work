import style from "./NavBar.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { Box,
        AppBar,
        Button,
        IconButton,
        Toolbar,
        Avatar,
        Typography,
        Menu,
        MenuItem } from "@mui/material";
import { openSidebar } from "../../redux/actions"
import { logout } from "../../redux/actions"
import { useEffect, useState } from "react";


const NavBar = () => {
    const dispath = useDispatch();
    const location = useLocation()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)

    const [auth, setAuth] = useState(false)
    const [menuLogin, setMenuLogin ] = useState(null)
    const [path, setPath] = useState(location.pathname)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(menuLogin);

    const openMenuHandler = (e) => {
        setMenuLogin(e.currentTarget)
    }

    const closeMenuHandler = (e) => {
        const { id } = e.target
        setMenuLogin(null)
        switch(id){
            case "logout":
                dispath(logout())
        }
    }


    const openSidebarHandler = () => {
        dispath(openSidebar(true))
    }

    useEffect( () => {
        setPath(location.pathname)
    }, [location])

    useEffect( () => {
        setAuth(user ? true : false)
    }, [user])

    return(
        <Box sx={{flexGrow:1}}>
            <AppBar color="transparent">
                <Toolbar>
                    <IconButton aria-label="menu"
                                color="inherit"
                                onClick={openSidebarHandler}>
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        {path.slice(1).toUpperCase()}
                    </Typography>
                    <Box sx={{flexGrow: 1, display:"flex", justifyContent: "center"}}>
                    <Typography>
                        NavBar
                    </Typography>
                    </Box>
                    {auth   ?   <div>
                                    <IconButton id="login-button"
                                        aria-label="user"
                                        color="inherit" 
                                        aria-controls={open ? 'user-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={openMenuHandler}>
                                        <Avatar alt="usuario"/>          
                                    </IconButton>
                                    <Menu   id="user-menu"
                                        open={open}
                                        anchorEl={menuLogin}
                                        onClose={closeMenuHandler}
                                        MenuListProps={{
                                            'aria-labelledby': 'login-button',
                                          }}
                                        >
                                        <MenuItem  id="profile" onClick={closeMenuHandler}>
                                            <Link to="/profile">Profile</Link>
                                        </MenuItem>
                                        <MenuItem id="logout" onClick={closeMenuHandler}>Cerrar sesion</MenuItem>
                                    </Menu>
                                </div>
                                
                            :   <IconButton aria-label="sig-in" color="inherit">
                                    <LoginIcon/>              
                                </IconButton>
                    }
                    

                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}

export default NavBar