import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterAdmin from "./pages/RegisterAdmin";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-center gap-4 p-4 bg-orange-200">
        <Link to="/login" className="font-semibold text-orange-700">Login</Link>
        <Link to="/register/user" className="font-semibold text-orange-700">User Register</Link>
        <Link to="/register/company" className="font-semibold text-orange-700">Company Register</Link>
        <Link to="/register/admin" className="font-semibold text-orange-700">Admin Register</Link>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
