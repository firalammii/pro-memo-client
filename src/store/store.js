import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/users-reducer';
import postsReducer from '../reducers/posts-reducer';

const store = configureStore({
    reducer: {
        usersReducer,
        postsReducer,

    }
});

export default store;