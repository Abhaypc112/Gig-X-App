import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

// const {accessToken} = useSelector((state:RootState)=>state.auth)

// Create the Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config : InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken && config.headers) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error : AxiosError) => {
        const orginalRequest = error.config as AxiosRequestConfig & {_retry?: boolean}
        if(error.response && error.response.status === 401 && !orginalRequest._retry){
        orginalRequest._retry = true;
        try{
            const response = await axios.post<{accessToken: string}>('/auth/refresh-token',{},{withCredentials:true});
            const { accessToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            if(orginalRequest.headers){
                orginalRequest.headers['Authorization'] = `Bearer ${accessToken}`; 
            }
            return axios(orginalRequest);
        }catch(refreshError){
            console.error('Token refresh failed:', refreshError);
        }
    }
        return Promise.reject(error);
    }
  );
  
export default axiosInstance;