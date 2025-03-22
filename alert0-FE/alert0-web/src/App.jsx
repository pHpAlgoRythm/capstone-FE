import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Auth/Registration";
import Login from "./auth/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="*" element={<Login />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration/>}/>
          <Route element={<ProtectedRoutes />}>
          {/* <Route path="/resident/dashboard" element= {<AdminDashboard/>}></Route> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
