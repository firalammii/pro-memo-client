import axios from 'axios';
import { BASEURL } from './url.js';

const userUrl = `${BASEURL}/users`;
const postUrl = `${BASEURL}/posts`;

export const fetchUsers = () => axios.get(`${userUrl}/users`);
export const createUser = (user) => axios.post(`${userUrl}/create`, user);
export const updateUser = (id, nuser) => axios.put(`${userUrl}/update/${id}`, nuser);
export const deleteUser = (id) => axios.delete(`${userUrl}/delete/${id}`);

export const fetchPosts = () => axios.get(`${postUrl}/posts`);
export const createPost = (post) => axios.post(`${postUrl}/create`, post);
export const updatePost = (id, npost) => axios.put(`${postUrl}/update/${id}`, npost);
export const deletePost = (id) => axios.delete(`${postUrl}/delete/${id}`);

