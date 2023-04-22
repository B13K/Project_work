import style from "./Profile.module.css"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Button, TextField, Select, MenuItem, Menu, Grid, Box } from "@mui/material"

import TabPanel from "../../components/TabPanel/TabPanel"
import ProfileHeader from "./components/header/ProfileHeader"
import ProfileNavBar from "./components/NavBar/ProfileNavBar"
import Grid2 from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProfileForm from "./components/ProfileForm/ProfileForm"
import JBBox from "../../components/JBBox/JBBox"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Profile = () => {
    

    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const user = useSelector( state => state.user)

    // useEffect( () => {
    //     if(user){

    //     }
    // }, [user])


    return (
        <div className={style.profileContainer}>
            <ProfileHeader>
                <ProfileNavBar value={value} handleChange={handleChange}/>
            </ProfileHeader>
            <Box sx={{flexGrow: 1}}>
                
            <Grid2 container spacing={2}>
                <Grid2 xs={12} md={6}>
                    <Item sx={{height: "18rem"}}>
                        <ProfileForm user={user} />
                    </Item>      
                </Grid2>
                <Grid2 xs={12} md={6}>
                    <Item sx={{height: "18rem"}}>
                        <TabPanel value={value} index={0}>
                            Item - {value}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item - {value}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item - {value}
                        </TabPanel>
                    </Item>
                </Grid2>
                <Grid2 xs={6}>
                    <Item>
                        xs-6
                    </Item>
                </Grid2>
                <Grid2 xs={6}>
                    <JBBox bgColor="primary" color="success" sx={{borderRadius: "2rem"}}>
                        Hola
                    </JBBox>
                </Grid2>
            </Grid2>
            </Box>
        </div>
    )
}

export default Profile