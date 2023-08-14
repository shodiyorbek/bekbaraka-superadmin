import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://api.bek-baraka.uz/api/v1',
    timeout: 50000,
});

export default axiosInstance;
