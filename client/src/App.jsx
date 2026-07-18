// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Brand from "./pages/BrandPage";
import Contact from "./pages/Contact";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import "./App.css";
import Footer from "./pages/Footer"; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands/:brandSlug" element={<Brand />} />
        <Route path="/about" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;