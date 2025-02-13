
import { RouteObject } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';
import UserFreelancerOption from '../../pages/auth/UserFreelancerOption';

const AuthenticationRoutes: RouteObject[] = [
  { path: '/:option/signup', element: <Signup/> },
  { path: '/login', element: <Login/>},
  { path: '/', element: <Login/>},
  { path: "/option", element: <UserFreelancerOption /> },
];

export default AuthenticationRoutes;