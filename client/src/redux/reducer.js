import {
    LOGIN,
    SIGNUP,
    LOGOUT,
    USERS_GET,
    USER_ADD,
    USER_MODIFY,
    SIDEBAR_OPEN,
    DARK_THEME,
    USER_GET
} from "./types"


const initialState = {
    sidebar: false,
    darkTheme: false,
    user: null,
    users: {},
    roles: [],
    lineas: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIDEBAR_OPEN:
            return {...state, sidebar:action.payload}
        case DARK_THEME:
            return {...state, darkTheme: action.payload }
        case LOGIN:
            return {...state, user: action.payload}
        case LOGOUT:
            return {...state, user: null}
        case USER_MODIFY:
            return {...state, user: action.payload}
        default:
            return {...initialState}
    }
}

export default reducer