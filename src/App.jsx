import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServiceCategories from "./pages/ServiceCategories";
import ServicesList from "./pages/ServicesList";
import Service from "./pages/service";
import ServicesPage from "./pages/ServicesPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<ServiceCategories />} />
        <Route path="/services/:category" element={<ServicesPage />} />
        <Route path="/service/:id" element={<Service/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
