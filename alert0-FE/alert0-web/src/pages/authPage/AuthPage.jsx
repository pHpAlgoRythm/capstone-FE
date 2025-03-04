import { Routes, Route } from "react-router-dom";
import Login from "../../components/Auth/Login";
import Registration from "../../components/Auth/Registration";
import Error from "../../components/Auth/Error";
function AuthPage() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="Registration" element={<Registration />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AuthPage;
