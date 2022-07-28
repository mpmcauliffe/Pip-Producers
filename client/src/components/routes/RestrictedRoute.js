import { useContext, useEffect, } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Loading from '../loading/Loading'


export const Restricted = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { loadUser, isAuthenticated, user, loading, } = authContext

    useEffect(() => {
        loadUser()

    // eslint-disable-next-line
    }, [])


    if (isAuthenticated && !loading && user !== null) {
        return user.role === 'admin' || user.role === 'contributor' 
            ?   <Outlet />
            :   <Navigate to='/listpage' />
    } else {
        return <Loading />
    }
}
