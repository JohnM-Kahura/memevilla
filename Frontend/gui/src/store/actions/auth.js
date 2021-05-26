import * as actionTypes from './actionTypes'
export const authStart=() =>{
    return{
        type:actionTypes.Auth_START
    }
}
export const authSuccess=(token) =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}
export const authFail =(error) =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const authLogin=(username,password)=>{

    return{
        tyu 
    }
}

export const authLogout=()=>{
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}
