import { useState, useEffect, useContext, } from 'react'
import AuthContext from '../context/auth/authContext'
// import { useSelector, } from 'react-redux'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn]               = useState(false)
    const [checkingStatus, setCheckingStatus]   = useState(true)

    const authContext            = useContext(AuthContext)
    const { isAuthenticated, }   = authContext

    // const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)

    }, [isAuthenticated])

    return { loggedIn, checkingStatus, }

    // return null
}
