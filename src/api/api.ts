import axios from 'axios';
// import { BASE_URL } from '../vite-env';

const api = axios.create({ baseURL: 'https://dummyjson.com/' });

export default api;