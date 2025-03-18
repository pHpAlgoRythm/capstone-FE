import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/residentsPage/dashboard";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Login from "./components/Auth/login";
import Registration from "./components/Auth/registration";
import Ambulance from "./components/Request/Ambulance";
import FireTruck from "./components/Request/FireTruck";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Registration/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>}/>
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/RequestPage/Ambulance" element={<Ambulance/>}></Route>
          <Route path="/RequestPage/FireTruck" element={<FireTruck/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
