import { IOrder } from "../interface/orderInterface";
import { IReview } from "../interface/reviewInterface";
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
export const addGigRatingApi = async (reviewData : IReview) => {
    const res = await axiosInstance.post('/user/create-review',reviewData);
    return res
}
export const getGigReviewByIdApi = async (gidId:string) => {
    const res = await axiosInstance.get(`/user/get-review-by/${gidId}`);
    return res
}