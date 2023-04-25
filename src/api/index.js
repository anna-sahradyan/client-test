import axios from "axios";
import {BASE_URL} from "./helper";
const API = axios.create({baseURL: "https://servertest-yi2o.onrender.com"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

//?Auth
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);

//?getUsers
export const fetchUsers = (page) => API.get(`/user?page=${page}`);
export const deleteUser = (id) => API.delete(`/user/${id}`);