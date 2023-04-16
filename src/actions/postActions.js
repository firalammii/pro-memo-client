
import { postsActionTypes, usersActionTypes } from './actionTypes';
import * as api from '../api/api';

const { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } = postsActionTypes;

export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (userId, postData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postData);
        console.log('created post:', data);
        dispatch({ type: CREATE_POST, payload: data });

        const res = await api.addUserPost(userId, data);
        console.log('added user post user:', res);
        // dispatch({ type: usersActionTypes.ADD_USER_POST, payload: data });


    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, npost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, npost);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        dispatch({ type: DELETE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (post) => async (dispatch) => {
    try {
        const { _id: id } = post;
        const npost = { ...post, likes: post.likes + 1 };
        const { data } = await api.updatePost(id, npost);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};