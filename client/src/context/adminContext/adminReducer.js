import { 
    GET_USERS,
    CHANGE_USER,
    UPDATE_USERS,
} from '../types'


export default function adminReducer (state, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, 
                users: action.payload,
            }

        case UPDATE_USERS: 
            return {
                ...state,
                changedUsers: []
            }

        case CHANGE_USER:
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload[0].id 
                    ? user.role = action.payload[0].role
                    : user
                ),
                changedUsers: [...state.changedUsers, action.payload[0]]
            }

        default:
            return state
    }
}
