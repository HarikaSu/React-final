import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JewelleryCards from "./MainJewellery";
import CartPage from "./CartPage";

const JewelleryApp = () => {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<JewelleryCards />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default JewelleryApp;
