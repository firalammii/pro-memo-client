import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../reducers/posts-reducer';

const store = configureStore({
    reducer: {
        postsReducer,
    }
});

export default store;