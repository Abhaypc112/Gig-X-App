import { Navigate, Outlet } from 'react-router-dom';

const AuthProtuctRouter = () => {
  const isAdmin = Boolean(localStorage.getItem("role")==='admin');
  const isUser = Boolean (localStorage.getItem("role")==='user');
  const isFreelancer = Boolean (localStorage.getItem("role")==='freelancer');
  return isUser? <Navigate to="/user/home"/> : 
  (isFreelancer? <Navigate to="/freelancer/dashboard"/> : 
  (isAdmin? <Navigate to="/admin/dashboard"/>:
  <Outlet/>))
}

export default AuthProtuctRouter
