
import Layout from "./components/Layout/Layout.jsx"

import { useDispatch} from "react-redux"
import { login } from "./redux/actions.js"



const App = () => {    
    
    const dispatch = useDispatch()
    const user = localStorage.getItem("user")
    const userJson = JSON.parse(user)
    dispatch(login(userJson))

    return (
               <Layout/>
    )
}

export default App