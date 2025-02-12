
import { RouteObject } from "react-router-dom";
import Chat from "../../pages/freelancer/FreelancerChat";
import FreelancerCreateGig from "../../pages/freelancer/FreelancerCreateGig";
import FreelancerDashboard from "../../pages/freelancer/FreelancerDashboard";
import FreelancerEditGig from "../../pages/freelancer/FreelancerEditGig";
import FreelancerHandleGigs from "../../pages/freelancer/FreelancerHandleGigs";
import FreelancerHandleOrders from "../../pages/freelancer/FreelancerHandleOrders";
import FreelancerProfile from "../../pages/freelancer/FreelancerProfile";

export const FreelancerRoutes :RouteObject[] = [
    {path:"/freelancer/dashboard", element:<FreelancerDashboard/>},
    {path:"/freelancer/handle-gigs", element:<FreelancerHandleGigs/>},
    {path:"/freelancer/handle-orders", element:<FreelancerHandleOrders/>},
    {path:"/freelancer/profile", element:<FreelancerProfile/>},
    {path:"/freelancer/create-gig", element:<FreelancerCreateGig/>},
    {path:"/freelancer/:gigId/edit-gig", element:<FreelancerEditGig/>},
    {path:"/chat", element:<Chat/>},
];