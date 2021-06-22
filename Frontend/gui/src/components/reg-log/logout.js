import React,{useEffect} from 'react'
import { useHistory } from 'react-router'
import axiosInstance from '../../axios_setup'
function Logout() {
    const history= useHistory()
    useEffect(() => {
       const response=axiosInstance.post('user/logout/blacklist',{
           refresh_token:localStorage.getItem('refresh_token')
       })
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        axiosInstance.defaults.headers['Authorization']=null
        console.log('user logged out')
        history.push('/signin')
    }, [])
    return (
        <div>
            logout
        </div>
    )
}

export default Logout
