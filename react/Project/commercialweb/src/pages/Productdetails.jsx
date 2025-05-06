import React, { useState } from 'react';
import './ProductDetail.css'; // Optional: for styling

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} ${product.name} to cart`);
        // TODO: Integrate with cart context or state management
    };

    return (
        <div className="product-detail-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                {/* Product Image Gallery */}
                <div className="product-images" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <div className="thumbnail-gallery" style={{ display: 'flex', gap: '10px' }}>
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt={`${product.name} ${index + 1}`} style={{ width: '80px', cursor: 'pointer' }} />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-info" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h2>{product.name}</h2>
                    <p style={{ fontSize: '18px', color: '#333' }}>${product.price.toFixed(2)}</p>
                    <p style={{ fontSize: '16px', color: '#777' }}>{product.description}</p>

                    <div className="quantity-control" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>

                    <button onClick={handleAddToCart} className="btn" style={{ width: 'fit-content', alignSelf: 'flex-start', padding: '12px 24px' }}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sample data for a product (replace with dynamic data from backend or context)
const sampleProduct = {
    name: 'White Sneakers',
    price: 59.99,
    description: 'These stylish white sneakers are perfect for any occasion, combining comfort and fashion.',
    image: '/assets/images/product1.jpg',
    images: [
        '/assets/images/product1.jpg',
        '/assets/images/product1_2.jpg',
        '/assets/images/product1_3.jpg',
    ],
};

const ProductDetails = () => {
    return <ProductDetail product={sampleProduct} />;
};

export default ProductDetails;
