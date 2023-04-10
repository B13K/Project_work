import style from "./Profile.module.css"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Button, TextField, Select, MenuItem, Menu } from "@mui/material"

const Profile = () => {
    const initialUser = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        nickname: "",
        Rols: []
    }
    const newRol = {
        id: undefined,
    }
    
    const user = useSelector(state => state.user)
    // const roles = useSelector(state => state.roles)

    const roles = [
        {id:1, name:"admin"},
        {id:2, name:"operador"},
        {id:3, name:"Jefe"}
    ]
    const [userForm, setUserForm ] = useState(initialUser)

    
    useEffect( () => {
        if(user){
            setUserForm({...user})
        }
    }, [user])

    const addRolHandler = (e) => {
        setUserForm({...userForm, Rols: [...userForm.Rols, newRol]})
    }

    const deleteRolHandler = (e) => {
        const { id } = e.target
        const newRoles = [...userForm.Rols].filter( (e,i ) => i !== Number(id))
        setUserForm({
            ...userForm,
            Rols: newRoles
        })
    } 

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




    return (
        <div>
            <form className={style.profileContainer}>
                <input  label="Nombre"
                            id={undefined}
                            name="name"
                            value={userForm.name}
                            onChange={onChangeHandler}
                 />
                <input  label="Apellido"
                            id={undefined}
                            name="lastname"
                            value={userForm.lastname}
                            onChange={onChangeHandler}
                />
                <input  label="Correo"
                            id={undefined}
                            name="email"
                            value={userForm.email}
                            onChange={onChangeHandler}
                 />
                <input  label="Nickname"
                            id={undefined}
                            name="nickname"
                            value={userForm.nickname}
                            onChange={onChangeHandler}
                />
                <Button onClick={addRolHandler}>Agregar Rol</Button>
                {userForm.Rols?.map( (r, i) => (
                    <div key={i}>
                        <label>{i}</label>
                        <select label="Rol" id={i} value={r.id} name={r.name} onChange={onChangeHandler}>
                            {
                                roles?.map((rol, index) => (
                                    <option key={index} value={rol.id}>{rol.name}</option>
                                ))
                            }
                        </select>                        
                        <Button id={i} onClick={deleteRolHandler}>Eliminar</Button>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Profile