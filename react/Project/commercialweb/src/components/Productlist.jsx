import React from 'react';
import ProductGrid from './ProductGrid';

const Productlist = () => {
    const products = [
        { id: 1, name: 'Nike Air Max', price: 120, image: '/assets/images/product1.jpg' },
        { id: 2, name: 'Adidas UltraBoost', price: 150, image: '/assets/images/product2.jpg' },
        { id: 3, name: 'Puma RS-X', price: 110, image: '/assets/images/product3.jpg' },
        { id: 4, name: 'Reebok Classic', price: 100, image: '/assets/images/product4.jpg' },
        { id: 5, name: 'New Balance 990', price: 140, image: '/assets/images/product5.jpg' },
    ];

    return (
        <div>
            <h2 style={headerStyle}>Shop Our Collection</h2>
            <ProductGrid products={products} />
        </div>
    );
};

// Styles
const headerStyle = {
    fontSize: '28px',
    fontWeight: '600',
    margin: '20px',
    textAlign: 'center',
};

export default Productlist;
