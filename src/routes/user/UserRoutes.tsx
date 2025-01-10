import Home from "../../pages/user/Home";
import UserViewGig from "../../pages/user/UserViewGig";
import UserViewOrders from "../../pages/user/UserViewOrders";
import UserViewPayment from "../../pages/user/UserViewPayment";

export const UserRoutes = [
    {path:"/user/home", element:<Home/>},
    {path:"/user/view-gig", element:<UserViewGig/>},
    {path:"/user/payment", element:<UserViewPayment/>},
    {path:"/user/orders", element:<UserViewOrders/>}
];
