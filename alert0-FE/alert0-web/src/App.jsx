import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Auth/Registration";
import Login from "./auth/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import DashboardLayoutBasic from "./components/admin/AdminDashboard";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/resident/dashboard" element= {<DashboardLayoutBasic/>}></Route>

                    <Route element={<ProtectedRoutes />}>
            
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;