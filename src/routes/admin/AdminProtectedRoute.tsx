import { Outlet, Navigate } from 'react-router-dom';

const AdminProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("role") === "admin";
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminProtectedRoute;