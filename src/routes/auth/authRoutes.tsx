import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';

// Autherization routes
export const authRoutes = [
    {path:"/login", element:<Login/>},
    {path:"/signup", element:<Signup/>},
];
