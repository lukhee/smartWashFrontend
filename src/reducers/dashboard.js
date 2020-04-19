import { 
    GET_PACKAGE,
    PACKAGE_ERROR
 } from "../actions/consTypes"

const initialState = {
    packageMenu: null,
    loading: true,
    error: {}
}

export default function(state=initialState, action){
    const { type, payload } = action
    switch ( type ) {
        case GET_PACKAGE:  
        return {
            ...state,
            packageMenu: payload,
            loading: false
        }
        case PACKAGE_ERROR:
        return {
            ...state,
            packageMenu: null,
            loading: false,
            error: payload
        }   
        default: 
            return state  
    }
}