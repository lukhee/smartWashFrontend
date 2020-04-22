import { 
    GET_PROFILE,
    PROFILE_FAILED,
    UPDATE_PROFILE,
    UPDATE_ERROR,
    CLEAR_PROFILE
 } from "../actions/consTypes"

const initialState = {
    profile: null,
    loading: true,
    error: {}
}

export default function(state=initialState, action){
    const { type, payload } = action
    switch ( type ) {
        case GET_PROFILE: 
        case UPDATE_PROFILE: 
        return {
            ...state,
            profile: payload,
            loading: false
        }
        case PROFILE_FAILED:
        case CLEAR_PROFILE:
        return {
            ...state,
            profile: null,
            loading: false,
            error: payload
        }  
        case UPDATE_ERROR:
        return {
            ...state,
            loading: false,
            error: payload
        } 
        default: 
            return state  
    }
}