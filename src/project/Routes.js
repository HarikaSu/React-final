import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./ptroutes";
import JewelleryCards from "./MainJewellery";
import CartPage from "./CartPage";
import WishlistPage from "./Whishlistpage";
import Signup from "./signup";
import Login from "./login";
import PrivateRoute from "./PrivteRoutes";

const DisableBackButton = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, null, window.location.href);
      };
    } else {
      window.onpopstate = null;
    }
  }, [location]);

  return null;
};

const JewelleryApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <DisableBackButton />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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


