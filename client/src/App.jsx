// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Brand from "./pages/BrandPage";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./pages/Footer"; 
import AboutUs from "./pages/AboutUs.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands/:brandSlug" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        {/* admin login route */}
        <Route path="/rainbow-admin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;