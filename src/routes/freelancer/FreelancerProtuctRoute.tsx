import { Navigate, Outlet } from "react-router-dom";

const FreelancerProtuctRoute = () => {
    const isAuthenticated = localStorage.getItem("role") === "freelancer";
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default FreelancerProtuctRoute
