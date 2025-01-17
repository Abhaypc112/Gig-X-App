import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';
import UserFreelancerOption from '../../pages/auth/UserFreelancerOption';

// Autherization routes
export const AuthRoutes = [
    {path:"/login", element:<Login/>},
    {path:"/:option/signup", element:<Signup/>},
    {path:"/option", element:<UserFreelancerOption/>}
];
