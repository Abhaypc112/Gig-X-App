import FreelancerCreateGig from "../../pages/freelancer/FreelancerCreateGig";
import FreelancerDashboard from "../../pages/freelancer/FreelancerDashboard";
import FreelancerHandleGigs from "../../pages/freelancer/FreelancerHandleGigs";
import FreelancerHandleOrders from "../../pages/freelancer/FreelancerHandleOrders";
import FreelancerProfile from "../../pages/freelancer/FreelancerProfile";

export const FreelancerRoutes = [
    {path:"/freelancer/dashboard", element:<FreelancerDashboard/>},
    {path:"/freelancer/handle-gigs", element:<FreelancerHandleGigs/>},
    {path:"/freelancer/handle-orders", element:<FreelancerHandleOrders/>},
    {path:"/freelancer/profile", element:<FreelancerProfile/>},
    {path:"/freelancer/create-gig", element:<FreelancerCreateGig/>},
];