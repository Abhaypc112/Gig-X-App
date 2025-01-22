import { IOrder } from "../interface/orderInterface";
import axiosInstance from "./axiosInstance";

export const userGetAllGigsApi = async () => {
    const res = await axiosInstance.get('/user/get-all-gigs');
    return res
}
export const userGetAllCategorysApi = async () => {
    const res = await axiosInstance.get('/user/get-all-category');
    return res
}
export const userCreateOrderApi = async (orderData : IOrder) => {
    const res = await axiosInstance.post('/user/create-order',orderData);
    return res
}
export const userGetOrdersByUserIdApi = async () => {
    const res = await axiosInstance.get('/user/get-orders-by-userId');
    return res
}