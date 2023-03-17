import { ACTION_TYPES } from '../constants';
const { CREATE_POST, FETCH_POSTS, UPDATE_POST, DELETE_POST } = ACTION_TYPES;

export default function reducer (state = { posts: [], }, action) {

    switch (action.type) {

        case FETCH_POSTS: {
            return { ...state, posts: action.payload };
        }
        case CREATE_POST: {
            return { ...state, posts: [action.payload, ...state.posts] };
        }
        case UPDATE_POST: {
            return {
                ...state,
                posts: state.posts.map(e => {
                    if (e._id === action.payload._id) {
                        return action.payload;
                    }
                    else return e;
                })
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(e => e._id !== action.payload._id)
            };
        }

        default: return state;
    }
}