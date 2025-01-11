import axiosInstance from "./axiosInstance";

export const adminGetAllUsersApi = async () => {
    const res = await axiosInstance.get('/admin/get-all-users');
    return res
}
export const adminUpdateUserApi = async (userId : object) => {
    const res = await axiosInstance.patch('/admin/update-user',userId);
    return res
}

