
import { deleteService, getService, postService, putService } from "../services/message.service"
import {
    SIDEBAR_OPEN,
    DARK_THEME,
    LOGIN,
    SIGNUP,
    LOGOUT,
    USER_GET,
    USER_ADD,
    USER_MODIFY,
    USER_DELETE,
    USERS_GET,
} from "./types"


export const openSidebar = (isOpen) => {
    return {
        type: SIDEBAR_OPEN,
        payload: isOpen
    }
}

export const changeTheme = (theme) => {
    return {
        type: DARK_THEME,
        payload: theme
    }
}

export const login = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", JSON.stringify(token))
    return {
        type: LOGIN,
        payload: user
    }
        
}

export const signUp = (newUser, token) => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", JSON.stringify(token))
    return {
        type: SIGNUP,
        payload: newUser        
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: LOGOUT,
    }
}

export const userGet = (id) => {
    return async function (dispatch) {
        const response = await getService(`/user/${id}`)
        return dispatch( {
                type: GET_USER,
                payload: response.data
        })
     }    
}

export const userAdd = (data) => {
    return async function (dispatch){
        const response = await postService("/user", data)
        return dispatch({
            type: USERT_ADD,
            payload: response.data
        })
    }
}

export const userModify = (data) => {
    return async function (dispatch) {
        const response = await putService("/user", data)        
        localStorage.setItem("user", JSON.stringify(response.data))
        return dispatch({
            type: USER_MODIFY,
            payload: response.data
        })
    }
}

export const userDelete = (id) => {
    return async function (dispatch) {
        const response = await deleteService(`/user/${id}`)
        return dispatch({
            type: USER_DELETE,
            payload: response.data
        })
    }
}
