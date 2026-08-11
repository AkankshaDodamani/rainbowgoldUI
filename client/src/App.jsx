// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Brand from "./pages/BrandPage";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import SideNav from "./components/SideNav.jsx";
import ManageBrands from "./pages/ManageBrands.jsx";
import ManageProducts from "./pages/ManageProducts.jsx";
import ManageContacts from "./pages/ManageContacts.jsx";
import ManageDashboard from "./pages/ManageDashboard.jsx";
import ProtectedRoute from "./middleware/protectedRoute.jsx";
import { ROUTES } from "./Constants/route.js";

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/rainbow-admin");
  const isAdminLoginRoute = location.pathname === ROUTES.ADMIN_LOGIN;

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {isAdminRoute && !isAdminLoginRoute ? (
        <div style={{ display: "flex" }}>
          <SideNav />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route
                path={ROUTES.ADMIN_MANAGE_BRANDS}
                element={
                  <ProtectedRoute>
                    <ManageBrands />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.ADMIN_MANAGE_PRODUCTS}
                element={
                  <ProtectedRoute>
                    <ManageProducts />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.ADMIN_MANAGE_CONTACTS}
                element={
                  <ProtectedRoute>
                    <ManageContacts />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.ADMIN_MANAGE_DASHBOARD}
                element={
                  <ProtectedRoute>
                    <ManageDashboard />
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
    </>
  );
};

export default App;
