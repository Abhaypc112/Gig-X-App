import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';
import UserFreelancerOption from '../../pages/auth/UserFreelancerOption';
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
    { path: "/login", element: <Login /> },
    { path: "/:option/signup", element: <Signup /> },
    { path: "/option", element: <UserFreelancerOption /> }
];

