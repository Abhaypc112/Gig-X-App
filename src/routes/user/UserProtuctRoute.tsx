import { Navigate, Outlet } from "react-router-dom";

const UserProtuctRoute = () => {
    const isAuthenticated = localStorage.getItem("role") === 'user';
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default UserProtuctRoute
