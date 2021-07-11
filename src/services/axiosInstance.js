import axios from 'axios';
import { configure } from 'axios-hooks';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api',
  timeout: 30000,
});

configure({ axios: axiosInstance });

export default axiosInstance;
