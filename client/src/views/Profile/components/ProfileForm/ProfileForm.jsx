
import { Button, Icon, Input, Typography, IconButton } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import JBBox from "../../../../components/JBBox/JBBox"
import { userModify } from "../../../../redux/actions"
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const ProfileForm = ({user}) => {

    const dispatch = useDispatch();

    const [userForm, setUserForm ] = useState(user)
    const [edit, setEdit ] = useState(false)

    const onChangeHandler = (e) => {
        const {id, name, value } = e.target
        if(id){
            const roles = [...userForm.Rols]
            roles[id].id = value
            setUserForm({
                ...userForm,
                Rols: [...roles]
            })
            return
        }
        setUserForm({
            ...userForm,
            [name]: value
        })

    }

    const editHandler = (e) => {
        setEdit(true)
    }

    const cancelHandler = () => {
        setUserForm(user)
        setEdit(false)
    }

    const saveForm = () => {
        dispatch(userModify(userForm))
        setEdit(false)
    }

   

    return(
        <JBBox sx={{            
            display: "flex", flexDirection: "column",  gap:"2rem", position: "relative"
        }
        }>
            {edit   ?   <JBBox sx={{position: "absolute", right: "0rem"}}>
                            <IconButton onClick={saveForm}>
                                <SaveIcon size="12px"/>
                            </IconButton>
                            <IconButton onClick={cancelHandler}>
                                <CloseIcon size="12px"/>
                            </IconButton>
                        </JBBox>
                    : <IconButton sx={{position: "absolute", right: "0rem"}} onClick={editHandler}>
                            <EditIcon size="12px"/>
                        </IconButton>}
            <Typography variant="h4">
                Informacion Personal
            </Typography>
            <JBBox sx={{display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                        }}>
                <JBBox sx={{display: "flex",
                            flexDirection: "column",
                            alignItems: "start"}}>
                    <Typography variant="h6" color="grey">
                        Name:
                    </Typography>                
                    <Input disabled={!edit}
                        id={undefined}
                        name="name"
                        value={userForm?.name}
                        onChange={onChangeHandler}
                    />
                </JBBox>
                <JBBox  sx={{display: "flex",
                            flexDirection: "column",
                            alignItems: "start"}}>
                    <Typography variant="h6" color="grey">
                        Apellidos:
                    </Typography>       
                    <Input disabled={!edit}
                        id={undefined}
                        name="lastname"
                        value={userForm?.lastname}
                        onChange={onChangeHandler}
                    />

                </JBBox>            
            </JBBox>
            <JBBox sx={{display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                        }}>
                <JBBox sx={{display: "flex",
                            flexDirection: "column",
                            alignItems: "start"}}>
                    <Typography variant="h6" color="grey">
                        Email:
                    </Typography>               
                    <Input  disabled={!edit}
                        id={undefined}
                        name="email"
                        value={userForm?.email}
                        onChange={onChangeHandler}
                    />
                </JBBox>
                <JBBox sx={{display: "flex",
                            flexDirection: "column",
                            alignItems: "start"}}>
                    <Typography variant="h6" color="grey">
                        NickName:
                    </Typography>                        
                    <Input disabled={!edit}
                        id={undefined}
                        name="nickname"
                        value={userForm?.nickname}
                        onChange={onChangeHandler}
                    />

                </JBBox>            
            </JBBox>            
        </JBBox>
    )
}


export default ProfileForm;