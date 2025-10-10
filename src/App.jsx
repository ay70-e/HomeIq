import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServiceCategories from "./pages/ServiceCategories";
import ServicesList from "./pages/ServicesList";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<ServiceCategories />} />
        <Route path="/services/:category" element={<ServicesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
