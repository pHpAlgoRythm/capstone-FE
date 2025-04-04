import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PendingLandingPage from "./pages/Residents/PendingUserLanding";
import ResidentDashboard from "./pages/Residents/dashboard";

const App = () => {
    return (
          <BrowserRouter>
          {/*public Routes*/}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/admin/dashboard" element= {<AdminDashboard/>}/>
                    <Route path= "/resident/pending" element={<PendingLandingPage/>}/>
                    
                    {/* ari ang bago na dashboard */}
                    <Route path="/resident/dashboard" element={<ResidentDashboard/>}/>
        {/* Private Routes (Registered Users only) */}
                    <Route element={<ProtectedRoutes />}/>
                    {/* for registered user only */}
                        {/* <Route path="/resident/dashboard">
                        
                    </Route> */}
                </Routes>
            </BrowserRouter>
    );
};

export default App;