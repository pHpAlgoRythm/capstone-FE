import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    const isAuthenticated = userID && token;
    return isAuthenticated? <Outlet/> : <Navigate to= './login' replace/>
};

export default ProtectedRoutes;