// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import ProtectedRoute from "./middleware/protectedRoute.jsx";
import ROUTES from "./Constants/route.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isAdminRoute = location.pathname.startsWith("/rainbow-admin");
  const isAdminLoginRoute = location.pathname === ROUTES.ADMIN_LOGIN;

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {isAdminRoute && !isAdminLoginRoute ? (
        <div style={{ display: "flex", position: "relative" }}>
          
          {/* 3. Pass the state and close function to SideNav */}
          <SideNav 
            isOpen={isSidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <Routes>
              <Route
                path={ROUTES.ADMIN_MANAGE_BRANDS}
                element={
                  <ProtectedRoute>
                    {/* 4. Pass a toggle function down to the page */}
                    <ManageBrands toggleSidebar={() => setSidebarOpen(true)} />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.ADMIN_MANAGE_PRODUCTS}
                element={
                  <ProtectedRoute>
                    <ManageProducts toggleSidebar={() => setSidebarOpen(true)} />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.ADMIN_MANAGE_CONTACTS}
                element={
                  <ProtectedRoute>
                    <ManageContacts toggleSidebar={() => setSidebarOpen(true)} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BRAND} element={<Brand />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.ABOUT} element={<AboutUs />} />
          <Route path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        </Routes>
      )}

      {!isAdminRoute && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;