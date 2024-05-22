import axios from "axios";


const BASE_URL = "http://localhost:8080/api/v1"; //backend server running port
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true

export default axiosInstance;