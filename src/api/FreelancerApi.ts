
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