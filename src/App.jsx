import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterAdmin from "./pages/RegisterAdmin";
import Homepage from "./pages/Homepage";
import RegisterSelection from "./pages/RegisterSelection";
import ServiceCard from "./components/ServiceCard";
import ServiceDetails from "./pages/service";
const App = () => {
  return (
    <BrowserRouter>
     

      <Routes>
       <Route path="/" element={<RegisterSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />

       <Route path="/service/:id" element={<ServiceDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
