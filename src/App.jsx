import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServiceCategories from "./pages/ServiceCategories";
import ServicesList from "./pages/ServicesList";
import Service from "./pages/service";
import ServicesPage from "./pages/ServicesPage";
import Orders from './pages/Orders'; 
import CompanyDashboard from "./pages/companyDashboard";
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterAdmin from "./pages/RegisterAdmin";
import Homepage from "./pages/Homepage";
import RegisterSelection from "./pages/RegisterSelection";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/company/profile" element={<CompanyDashboard />} /> // correct capitalization
        <Route path="/RegisterSelection" element={<RegisterSelection />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/services" element={<ServiceCategories />} />
        <Route path="/services/:category" element={<ServicesPage />} />
        <Route path="/service/:id" element={<Service/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/company" element={<CompanyDashboard />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;