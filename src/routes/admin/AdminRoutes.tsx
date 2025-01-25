import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminHandleCategory from "../../pages/admin/AdminHandleCategory";
import AdminHandleGigs from "../../pages/admin/AdminHandleGigs";
import AdminHandleOrders from "../../pages/admin/AdminHandleOrders";
import AdminHandleUsers from "../../pages/admin/AdminHandleUsers";

export const AdminRoutes = [
    {path:'/admin/dashboard', element:<AdminDashboard/>},
    {path:'/admin/handle-gigs', element:<AdminHandleGigs/>},
    {path:'/admin/handle-orders', element:<AdminHandleOrders/>},
    {path:'/admin/handle-users', element:<AdminHandleUsers/>},
    {path:'/admin/handle-category', element:<AdminHandleCategory/>}
]