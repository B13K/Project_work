
import { useDispatch} from "react-redux"
import { login } from "./redux/actions.js"

import { useSelector } from "react-redux"
import LightTheme  from "./themes/Light/LightTeme"
import DarkTheme from "./themes/Dark/DarkTheme"
import { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";


import Layout from "./components/Layout/Layout.jsx"


const App = () => {    
        
    const theme = useSelector( state => state.darkTheme)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const dispatch = useDispatch()
    const user = localStorage.getItem("user")
    const userJson = JSON.parse(user)
    dispatch(login(userJson))

    
    useEffect( () => {
        if(theme !== isDarkTheme){
            setIsDarkTheme(theme)
        }
    }, [theme])

    return (
        <ThemeProvider theme={isDarkTheme   ?   DarkTheme : LightTheme}>
            <CssBaseline/>
            <Layout/>            
        </ThemeProvider>
    )
}

export default App