// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Brand from "./pages/BrandPage";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import SideNav from "./Components/SideNav.jsx";
import ManageBrands from "./pages/ManageBrands.jsx";
import ManageProducts from "./pages/ManageProducts.jsx";
import ManageContacts from "./pages/ManageContacts.jsx";
import ManageDashboard from "./pages/ManageDashboard.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands/:brandSlug" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        {/* admin login route */}
        <Route path="/rainbow-admin" element={<AdminLogin />} />
        <Route path="/rainbow-admin/navbar" element={<SideNav />} />
        <Route
          path="/rainbow-admin/manage-brands"
          element={<ManageBrands />}
        />{" "}
        <Route
          path="/rainbow-admin/manage-products"
          element={<ManageProducts />}
        />{" "}
        <Route
          path="/rainbow-admin/manage-contacts"
          element={<ManageContacts />}
        />{" "}
        <Route
          path="/rainbow-admin/manage-dashboard"
          element={<ManageDashboard />}
        />{" "}


      </Routes>
      <Footer />
      </>
  );
};

export default App;
