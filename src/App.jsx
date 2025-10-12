import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterAdmin from "./pages/RegisterAdmin";
import Homepage from "./pages/Homepage";
import RegisterSelection from "./pages/RegisterSelection";
import ServiceDetails from "./pages/service";
import DetailedOrderForm from "./components/orderform";
import CompanyDashboard from "./pages/companyDashboard"; // ✅ match your file name
import ServicesAndOffers from "./components/ServicesAndOffers ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServicesAndOffers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company/profile" element={<CompanyDashboard />} /> // correct capitalization
       
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/RegisterSelection" element={<RegisterSelection />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
