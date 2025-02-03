import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JewelleryCards from "./MainJewellery";
import CartPage from "./CartPage";
import WishlistPage from "./Whishlistpage";
import Signup from "./signup";
import Login from "./login";

const JewelleryApp = () => {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<JewelleryCards />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
};

export default JewelleryApp;
