import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./userlogin/Register";
import Login from "./userlogin/Login";
import Home from "./componetnt/Home";
import Addtocart from "./componetnt/Addtocart";
import Navbar from './componetnt/Navbar';
import Footer from './footer/Footer';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
      <Route path="/Footer" element={<Footer />} />
    </Router>
  );
};

export default App;
