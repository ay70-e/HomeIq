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
import DetailedOrderForm from "./components/orderform";
const App = () => {
  return (
    <BrowserRouter>
     

      <Routes>
       
        <Route path="/" element={<Homepage />} />
       <Route path="/service/:id" element={<ServiceDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
