import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./ptroutes";
import JewelleryCards from "./MainJewellery";
import CartPage from "./CartPage";
import WishlistPage from "./Whishlistpage";
import Signup from "./signup";
import Login from "./login";
import PrivateRoute from "./PrivteRoutes";
import AuthRoute from "./authPage";

const JewelleryApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        {/* Auth Routes (Prevent access if logged in) */}
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes (Prevent access if logged out) */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<JewelleryCards />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default JewelleryApp;
