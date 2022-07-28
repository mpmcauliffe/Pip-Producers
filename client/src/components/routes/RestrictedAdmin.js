import { useContext, } from 'react'
import { Navigate, Outlet, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Loading from '../loading/Loading'


export const RestrictedAdmin = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { user, } = authContext


    if (user !== null) {
        return user.role === 'admin'
            ?   <Outlet />
            :   <Navigate to='/' />  
    } else {
        return <Loading />
    }
}
