import { 
    LOGIN_SUCCESS,
    REGISTER_SUCCESS, 
    REGISTER_FAILURE, 
    AUTH_ERROR, 
    USER_LOADED, 
    LOGOUT, 
    CLEAR_PROFILE } from './consTypes'
import { setAlert } from './alert'
import api from 'components/ApiUtility/baseApi'


// Load User
export const loadUser = ()=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.get('/auth', config )
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (error) {

        dispatch({
            type: AUTH_ERROR,
        })
    }
}

// Login User
export const login = ({email, password})=> async dispatch => {
    const body = { email, password}
    const config = {
        "content-Type" : "application/json"
    }

    try {
        const res = await api.post('/auth/login', body, config )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAILURE,
        })
    }
}

// Register New User
export const register = ({name, email, password})=> async dispatch => {
    const body = { name, email, password}
    const config = {
        "content-Type" : "application/json"
    }

    try {
        const res = await api.post('/user', body, config )
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAILURE,
        })
    }
}

// Logout User
export const logout = (history)=> async dispatch => {
        dispatch({type: LOGOUT})
        dispatch({type: CLEAR_PROFILE})
        history.push('/')
}