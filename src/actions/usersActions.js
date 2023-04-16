
import { usersActionTypes } from './actionTypes';
import * as api from '../api/api';

const { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, } = usersActionTypes;

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createUser = (userData) => async (dispatch) => {
    console.log('userData', userData);
    try {
        const { data } = await api.createUser(userData);
        dispatch({ type: CREATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = (id, nuser) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, nuser);
        dispatch({ type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id);
        dispatch({ type: DELETE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};
