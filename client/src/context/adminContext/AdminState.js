import { useReducer, } from 'react'
import AdminContext from './adminContext'
import adminReducer from './adminReducer'
import axios from 'axios'
import { 
    GET_USERS,
    UPDATE_USERS,
    CHANGE_USER,
} from '../types'


const AdminState = props => {
    const initialState = {
        users: null,
        single: null,
        changedUsers: [],
    }

    const [state, dispatch] = useReducer(adminReducer, initialState)

    // header data
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    // get ALL users
    const getUsers = async () => {
        try {
            const res = await axios.get('/api/admin')

            dispatch({ 
                type: GET_USERS, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)

            // setTimeout(() => {
            //     getUsers()
            // }, 2000);
        }
    }

    // update users
    const updateUsers = async () => {
        try {
            const res = await axios.put('/api/admin', state.changedUsers, config)

            dispatch({ 
                type: UPDATE_USERS, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)
        }
    }

    // change user role
    const changeUserRole = updatedUser => {
        dispatch({
            type: CHANGE_USER,
            payload: updatedUser
        })
        console.log(state.changedUsers)
    }

    // delete user

    // publish article


    return (
        <AdminContext.Provider
            value={{
                users: state.users,
                single: state.single,
                changedUsers: state.changedUsers,
                getUsers,
                updateUsers,
                changeUserRole,
                 }}

        >   {props.children}
        </AdminContext.Provider>
    )
}


export default AdminState
