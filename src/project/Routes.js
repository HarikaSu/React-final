import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import JewelleryCards from "./MainJewellery";
import CartPage from "./CartPage";
import WishlistPage from "./Whishlistpage";
import PrivateRoute from "./PrivteRoutes";
import AuthRoute from "./authPage";

const JewelleryApp = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes (Signup/Login) */}
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<JewelleryCards />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>

        {/* Redirect Unknown Routes to Login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default JewelleryApp;
