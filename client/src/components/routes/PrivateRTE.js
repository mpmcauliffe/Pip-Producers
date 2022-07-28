import { Navigate, Outlet, } from 'react-router-dom'
import { useAuthStatus, } from '../../hooks/useAuthStatus'
import Loading from '../loading/Loading'


export const PrivateRTE = () => {
    const { loggedIn, checkingStatus, } = useAuthStatus()

    if (checkingStatus) { return <Loading /> }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}
