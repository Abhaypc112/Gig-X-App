import axiosInstance from "./axiosInstance";

export const adminGetAllUsersApi = async () => {
    const res = await axiosInstance.get('/admin/get-all-users');
    return res
}
export const adminBlockUserApi = async (userId : object) => {
    const res = await axiosInstance.patch('/admin/block-user',userId);
    return res
}
export const adminGetAllGigsApi = async () => {
    const res = await axiosInstance.get('/admin/get-all-gigs');
    return res
}
export const adminBlockGigApi = async (gigId : object) => {
    const res = await axiosInstance.patch('/admin/block-gig',gigId);
    return res
}
export const adminGetAllOrdersApi = async () => {
    const res = await axiosInstance.get('/admin/get-all-orders');
    return res
}

