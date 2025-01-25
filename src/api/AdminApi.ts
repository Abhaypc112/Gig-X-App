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
export const adminGetAllCategoryApi = async () => {
    const res = await axiosInstance.get('/admin/get-all-category');
    return res
}
export const adminAddCategoryApi = async (category:FormData) => {
    const res = await axiosInstance.post('/admin/add-category',category);
    return res
}
export const adminEditCategoryApi = async (category:FormData) => {
    const res = await axiosInstance.patch('/admin/edit-category',category);
    return res
}
export const adminDeleteCategoryApi = async (categoryId:string) => {
    const res = await axiosInstance.delete(`/admin/delete-category/${categoryId}`);
    return res
}

