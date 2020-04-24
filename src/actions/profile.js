import { 
    GET_PROFILE,
    UPDATE_PROFILE,
    UPDATE_ERROR,
    PROFILE_FAILED,
    } from './consTypes'
import { setAlert } from './alert'
import api from 'components/ApiUtility/baseApi'


// Load Profile
export const getProfile = ()=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.get('/profile', config )
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (error) {
        const errors = error.response;
        console.log(errors)

        dispatch({
            type: PROFILE_FAILED,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Create Profile
export const createProfile = (formData)=> async dispatch => {
    console.log(formData)
    const config = {
        headers : {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.post('/profile', formData,  config )
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (error) { 
        const errors = error.response.data.errors;
        console.log(errors)

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_FAILED,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Add Location
export const addLocation = (formData)=> async dispatch => {
    console.log(formData)
    const config = {
        headers : {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.put('/profile/location', formData, config )
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Delete Location
export const deleteLocation = (id)=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.delete(`/profile/location/${id}`, config )
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Location deleted successfully', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)

        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Add Car
export const addCar = (formData)=> async dispatch => {
    const config = {
        headers : {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.put('/profile/car', formData, config )
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Delete Car
export const deleteCar = (id)=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.delete(`/profile/car/${id}`, config )
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Location deleted successfully', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)

        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Request for Wash
export const requestWash = (data, history)=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.post (`profile/request_wash`, data, config )
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Reqeust was successfully', 'success'))
        
        history.push('/dashboard')
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)

        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}