import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "../../pages/userhome/userhome";
import Gallery from "../../pages/gallery/gallery";
import Featured from "../../pages/featured/featured";
import Pricing from "../../pages/priceplan/priceplan";
import Tours from '../../pages/tours/tours';
import "./NavApp.css";

function NavApp() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/featured"  element={<Featured/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours" element={<Tours/>} />
        </Routes>
      </Router>
    </div> 
  );
}

export default NavApp;

