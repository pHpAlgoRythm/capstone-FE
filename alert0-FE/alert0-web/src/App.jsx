import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/residentsPage/dashboard";
import ProtectedRoutes from "./components/middleware/ProtectedRoutes";
import Login from "./components/Auth/login";
import Registration from "./components/Auth/registration";
import Error from "./components/Auth/Error";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="*" element={<Error/>} />

          <Route path="/login" element={<Login />} />

          <Route path="/Registration" element={<Registration/>}/>


          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>

          </Route>

          
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
