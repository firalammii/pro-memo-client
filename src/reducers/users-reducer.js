import { usersActionTypes } from '../actions/actionTypes';
const { CREATE_USER, FETCH_USERS, UPDATE_USER, DELETE_USER, SELECT_USER, LOGOUT } = usersActionTypes;

const initial = {
    users: [],
    memoUser: JSON.parse(localStorage.getItem('memoUser')) || null
};
export default function reducer (state = initial, action) {

    switch (action.type) {

        case FETCH_USERS: {
            return { ...state, users: action.payload };
        }
        case CREATE_USER: {
            return { ...state, users: [action.payload, ...state.users] };
        }
        case UPDATE_USER: {
            return {
                ...state,
                users: state.users.map(e => {
                    if (e._id === action.payload._id) {
                        return action.payload;
                    }
                    else return e;
                })
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(e => e._id !== action.payload._id)
            };
        }
        case SELECT_USER: {
            localStorage.setItem('memoUser', JSON.stringify(action.payload));
            return { ...state, memoUser: action.payload };
        }
        case LOGOUT: {
            localStorage.removeItem('memoUser');
            return { ...state, memoUser: null };
        }

        default: return state;
    }
}