import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList'; // Import your ProductList component
import ProductCart from './components/ProductCart'; // Import your ProductCart component
import ProductDetail from './components/ProductDetail'; // Import your ProductDetail component
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Optional: for global styling

const App = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <Navbar cart={cart} />

                {/* Main Content */}
                <Routes>
                    <Route
                        path="/"
                        element={<ProductList onAddToCart={handleAddToCart} />}
                    />
                    <Route path="/cart" element={<ProductCart />} />
                    <Route
                        path="/product/:id"
                        element={<ProductDetail onAddToCart={handleAddToCart} />}
                    />
                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
