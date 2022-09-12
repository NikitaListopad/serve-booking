import axios from "axios";

export const API_URL = 'http://127.0.0.1:3030/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage. getItem('token');

    config.headers!.Authorization = `Bearer ${token}`

    return config;
})

export default api;