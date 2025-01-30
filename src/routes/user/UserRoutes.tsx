import Home from "../../pages/user/Home";
import UserProfile from "../../pages/user/UserProfile";
// import UserChat from "../../pages/user/UserChat";
import UserViewCategoryProducts from "../../pages/user/UserViewCategoryProducts";
import UserViewGig from "../../pages/user/UserViewGig";
import UserViewOrders from "../../pages/user/UserViewOrders";
import UserViewPayment from "../../pages/user/UserViewPayment";

export const UserRoutes = [
    {path:"/home", element:<Home/>},
    {path:"/view-gig/:gigId", element:<UserViewGig/>},
    {path:"/payment/:gigId/:gigPlan", element:<UserViewPayment/>},
    {path:"/orders", element:<UserViewOrders/>},
    {path:"/all-gigs/:category", element:<UserViewCategoryProducts/>},
    {path:"/profile", element:<UserProfile/>},
    // {path:"/chat", element:<UserChat/>}
];
