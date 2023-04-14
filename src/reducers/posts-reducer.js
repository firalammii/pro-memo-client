import { ACTION_TYPES } from '../actions/post-actionTypes';
const { CREATE_POST, FETCH_POSTS, UPDATE_POST, DELETE_POST, SELECT_POST } = ACTION_TYPES;

export default function reducer (state = { posts: [], selecteds: [] }, action) {

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
        case SELECT_POST: {
            return { ...state, selecteds: [action.payload, ...state.selecteds] };
        }

        default: return state;
    }
}