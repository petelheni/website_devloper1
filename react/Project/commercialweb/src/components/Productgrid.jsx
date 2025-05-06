import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Assuming you have the ProductCard component
import './ProductGrid.css'; // Optional: for styling

const ProductGrid = ({ products }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="product-grid-container" style={gridContainerStyle}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};

// Styles
const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
};

export default ProductGrid;
