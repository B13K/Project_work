
import NavBar from "../NavBar/NavBar.jsx"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import style from "./Layout.module.css"

const Layout = () => {

    const apiServerUrl = "http://localhost:3001"
    const { user, getAccessTokenSilently } = useAuth0();

    
    
    // const getAxios = async () => {
    //     try {
    //         const accessToken = await getAccessTokenSilently();
    //         const groupData = await axios.get(`http://localhost:3001/login/private`, {
    //           headers: {
    //             Authorization: `bearer ${accessToken}`
    //           }
    //         });
    //         console.log(groupData);
    //       } catch (e) {
    //         console.log(e.message);
    //       }
    
    // }

    // getAxios()

      
    const getToken = async () => {
        try {
            const token = await getAccessTokenSilently();
            

            console.log(token)

            const config = {
                url: `${apiServerUrl}/login/private`,
                method: "GET",
                headers: {
                  "content-type": "application/json",
                  "authorization": `Bearer ${token}`,
                },
              };
            const response = await axios(config)
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // });
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    }

    getToken();

    return(
        <div className={style.layoutContainer}>
            <NavBar/>
            <h1>{JSON.stringify(user)}</h1>
        </div>
    )

}

export default Layout;