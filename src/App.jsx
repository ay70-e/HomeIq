import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServiceCategories from "./pages/ServiceCategories";
import ServicesList from "./pages/ServicesList";
import Service from "./pages/service";
import ServicesPage from "./pages/ServicesPage";
import Orders from './pages/Orders'; 
import Orders1 from './pages/Orders1'; 
import CompanyDashboard from "./pages/companyDashboard";
import AdminDashboard from "./pages/adminDashboard";
import UsersPage from './pages/usersPage';
import CompaniesPage from './pages/companiesPage';
import MessagesPage from './pages/MessagesPage';
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterAdmin from "./pages/RegisterAdmin";
import Homepage from "./pages/homepage";
import RegisterSelection from "./pages/RegisterSelection";
import Profile from "./pages/UserProfile";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company/profile" element={<CompanyDashboard />} /> // correct capitalization
        <Route path="/RegisterSelection" element={<RegisterSelection />} />
        <Route path="/register/user" element={<RegisterUser />} />
         <Route path="/user/profile" element= {<Profile />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/services" element={<ServiceCategories />} />
        <Route path="/services/:category" element={<ServicesPage />} />
        <Route path="/service/:id" element={<Service/>} />
        <Route path="/orders" element={<Orders />} />
         <Route path="/orders1" element={<Orders1 />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/admin/profile" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/companies" element={<CompaniesPage />} />
        <Route path="/admin/messages" element={<MessagesPage />} />
        <Route path="/admin/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;





