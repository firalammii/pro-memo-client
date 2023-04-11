import axios from 'axios';
import { BASEURL } from './url.js';

const url = `${BASEURL}/posts`;

export const fetchPosts = () => axios.get(`${url}/fetch`);
export const createPost = (post) => axios.post(`${url}/post`, post);
export const updatePost = (id, npost) => axios.put(url + `/update/${id}`, npost);
export const deletePost = (id) => axios.delete(`${url}/delete/${id}`);
