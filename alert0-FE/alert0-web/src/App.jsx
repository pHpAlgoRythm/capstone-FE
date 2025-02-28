import React from "react";
import AuthPage from "./pages/authPage/AuthPage";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){
    return (
        <>
<Router>
    <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/AuthPage" element={<AuthPage/>}/>
    </Routes>
</Router>
        </>
    )
}
export default App;