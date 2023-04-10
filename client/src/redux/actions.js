
import {
    LOGIN,
    SIGNUP,
    LOGOUT,
    USERS_GET,
    USER_ADD,
    USER_MODIFY,
    SIDEBAR_OPEN
} from "./types"


export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
        
}

export const signUp = (newUser) => {
    return {
        type: SIGNUP,
        payload: newUser        
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const openSidebar = (isOpen) => {
    return {
        type: SIDEBAR_OPEN,
        payload: isOpen
    }
}