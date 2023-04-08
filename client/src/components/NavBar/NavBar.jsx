import style from "./NavBar.module.css"
import { useDispatch, useSelector } from "react-redux"
import MenuIcon from '@mui/icons-material/Menu';
import { openSidebar } from "../../redux/actions"


const NavBar = () => {
    const dispath = useDispatch();

    const openSidebarHandler = () => {
        dispath(openSidebar(true))
    }

    return(
        <div className={style.navContainer}>
            <button onClick={openSidebarHandler} className={style.navBarButton}>
                <MenuIcon />
            </button>
            <h1>Titulo y todo lo que quiero</h1>
        </div>
    )
}

export default NavBar