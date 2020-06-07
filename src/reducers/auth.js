import { 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS, 
    AUTH_ERROR, 
    USER_LOADED, 
    LOGIN_SUCCESS, 
    UPDATE_USER, 
    LOGOUT, 
    // ACCOUNT_DELETED
 } from "../actions/consTypes"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isAdmin: null,
    loading: true,
    user: null
}

export default function(state=initialState, action){
    const { type, payload } = action
    switch ( type ) {
        case USER_LOADED: 
        return {
            ...state,
            user: payload,
            loading: false,
            isAuthenticated: true
        } 
        // case UPDATE_USER: 
        // return {
        //     ...state,
        //     user: payload,
        //     loading: false,
        //     isAuthenticated: true
        // }
        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAILURE: 
        case AUTH_ERROR:
        case LOGOUT:
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            loading: false
        }  
        default: 
            return state  
    }
}