import {
    LOGIN,
    SIGNUP,
    LOGOUT,
    USERS_GET,
    USER_ADD,
    USER_MODIFY,
    SIDEBAR_OPEN
} from "./types"


const initialState = {
    sidebar: false,
    user: null,
    users: {},
    roles: [],
    lineas: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIDEBAR_OPEN:
            return {...state, sidebar:action.payload}
        case LOGIN:
            return {...state, user: action.payload}
        case LOGOUT:
            return {...state, user: null}
        default:
            return {...initialState}
    }
}

export default reducer