import * as actionTypes from './actionTypes'
export const authStart=() =>{
    return{
        type:actionTypes.Auth_START
    }
}
export const authSuccess=(token) =>{
    return{
        type:actionTypes.AUTH_SUCCESS
    }
}
export const authFail =() =>{
    return{
        type:actionTypes.AUTH_FAIL
    }
}
export const authLogout=()=>{
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}