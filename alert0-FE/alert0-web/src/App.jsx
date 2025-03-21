import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Login from "./components/Auth/login";
import Registration from "./components/Auth/Registration";
import AdminDashboard from "./pages/adminPage/AdminPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element= {<AdminDashboard/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration/>}/>
          <Route element={<ProtectedRoutes />}>
              
         
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
