import { 
    GET_PACKAGE,
    PACKAGE_ERROR,
    } from './consTypes'
import { setAlert } from './alert'
import api from 'components/ApiUtility/baseApi'
import { getProfile } from "./profile"


// Load Profile
export const getPackage = ()=> async dispatch => {
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }

    try {
        const res = await api.get('/package', config )
        dispatch({
            type: GET_PACKAGE,
            payload: res.data
        })
        
        dispatch(getProfile())
    } catch (error) {
        const errors = error.response;
        console.log(errors)

        dispatch({
            type: PACKAGE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}