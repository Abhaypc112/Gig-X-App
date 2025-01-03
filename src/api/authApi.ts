import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

const AUTH = "http://localhost:5000/api";

export const userOtApi = (email : string) => {
    const res = axiosInstance.post(`${AUTH}/user/otp`,{email});
    console.log(res)
    return res
}
export const signupUserApi = (signupData : object) : Promise<AxiosResponse<any>> => {
    const res = axiosInstance.post(`${AUTH}/user/signup`,signupData);
    console.log(res,"api")
    return res
}
export const loginUserApi = (loginData : object) : Promise<AxiosResponse<any>> => {
    const res = axiosInstance.post(`${AUTH}/user/login`,loginData);
    console.log(res)
    return res
}
export const googleAuthApi = (idToken: string) : Promise<AxiosResponse<any>> => {
    const res = axiosInstance.post(`${AUTH}/auth/google`,idToken);
    console.log(res)
    return res
}
