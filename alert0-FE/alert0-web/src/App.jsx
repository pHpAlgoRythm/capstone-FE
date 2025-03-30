import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import AdminDashboard from "./pages/Admin/AdminDashboard";
const App = () => {
    return (
          <BrowserRouter>
          {/*public Routes*/}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/admin/dashboard" element= {<AdminDashboard/>}/>

        {/* Private Routes (Registered Users only) */}
                    <Route element={<ProtectedRoutes />}/>
                        <Route path="/resident/dashboard">
                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default App;