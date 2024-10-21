import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: import.meta.mode === "development" ? "https://ecommerce19-ten.vercel.app/" : "http://localhost:3000",
    baseURL:"https://ecommerce19-ten.vercel.app/",
    
    withCredentials: true,
});

export default axiosInstance;