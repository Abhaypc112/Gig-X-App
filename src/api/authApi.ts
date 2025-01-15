import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

const AUTH = "http://localhost:5000/api";

export const userOtApi = (email : string) => {
    const res = axiosInstance.post(`${AUTH}/user/otp`,{email});
    console.log(res)
    return res
}
export const signupUserApi = (signupData : object) => {
    const res = axiosInstance.post(`${AUTH}/user/signup`,signupData);
    return res
}
export const loginUserApi = (loginData : object) => {
    const res = axiosInstance.post(`${AUTH}/user/login`,loginData);
    return res
}
export const googleAuthApi = (idToken: string) => {
    const res = axiosInstance.post(`${AUTH}/auth/google`,idToken);

    return res
}
export const userLogOutApi = () : Promise<AxiosResponse<any>> => {
    const res = axiosInstance.post('/user/log-out');
    return res
}
