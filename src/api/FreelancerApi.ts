
import axiosInstance from "./axiosInstance"

export const freelancerCreateGigApi = async(FormData : FormData) => {
   const res = await axiosInstance.post('/freelancer/create-gig',FormData);
   return res;
}
export const freelancerGetAllGigsApi = async() => {
   const res = await axiosInstance.get('/freelancer/get-all-gigs');
   return res;
}
export const freelancerUpdateGigStatausApi = async(gigId : object) => {
   const res = await axiosInstance.patch('/freelancer/update-gig-status',gigId);
   return res;
}
export const freelancerEditGigApi = async(FormData : FormData) => {
   const res = await axiosInstance.post('/freelancer/edit-gig',FormData);
   return res;
}
export const freelancerDeleteGigApi = async(gigId : object) => {
   const res = await axiosInstance.patch('/freelancer/delete-gig',gigId);
   return res;
}
export const freelancerGetAllCategoryApi = async() => {
   const res = await axiosInstance.get('/freelancer/get-all-category');
   return res;
}
export const freelancerGetOrdersApi = async() => {
   const res = await axiosInstance.get('/freelancer/get-all-orders');
   return res;
}
export const freelancerGetByIdApi = async() => {
   const res = await axiosInstance.get('/freelancer/get-by-id');
   return res;
}
export const freelancerEditByIdApi = async(formData : FormData) => {
   const res = await axiosInstance.patch('/freelancer/edit-by-id',formData);
   return res;
}