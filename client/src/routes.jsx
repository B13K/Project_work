// Iconos
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PersonIcon from '@mui/icons-material/Person';


// Dashboard

import Dashboard from "./views/Dashboard/Dashboard"

// Profile
import Profile from "./views/Profile/Profile"


// Login
import Login from "./views/Login/Login"
import SignUp from "./views/SignUp/SignUp"


const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        path: "/dashboard",
        icon: <HomeIcon size="12px" />,
        component: <Dashboard />,
        isProtected: false
    },
    {
        type: "title",
        title: "Servo motores",
        key: "servomotores"
    },
    {
        type: "collapse",
        name: "Dashboard",
        key: "servo-dashboard",
        path: "/servo/dashboard",
        icon: <AutorenewIcon size="12px"/>,
        component: <Dashboard />,
        isProtected: true
    },
    // {
    //     type: "title",
    //     title: "Admin",
    //     key: "admin"
    // },


    

    {
        type: "title",
        title: "Profile",
        key: "profile-title"
    },
    {
        type: "collapse",
        name: "Profile",
        key: "profile",
        path: "/profile",
        icon: <PersonIcon size="12px"/>,
        component: <Profile />,
        isProtected: "protected"
    },
    {
        type: "title",
        title: "Account",
        key: "account"
    },
    {
        type: "collapse",
        name: "Login",
        key: "login",
        path: "/auth/login",
        icon: <LoginIcon size="12px"/>,
        component: <Login />,
        isProtected: false
    },
    {
        type: "collapse",
        name: "Sign-Up",
        key: "sign-up",
        path: "/auth/signup",
        icon: <HowToRegIcon size="12px"/>,
        component: <SignUp />,
        isProtected: false
    },

]

export default routes;