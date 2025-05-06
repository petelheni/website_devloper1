import React, { useState } from 'react';
import './Cart.css'; // Optional: Create CSS module or global styles

const initialCartItems = [
    {
        id: 1,
        name: 'White Sneakers',
        price: 59.99,
        quantity: 1,
        image: '/assets/images/product1.jpg',
    },
    {
        id: 2,
        name: 'Black Running Shoes',
        price: 89.99,
        quantity: 2,
        image: '/assets/images/product2.jpg',
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, delta) => {
        const updated = cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );
        setCartItems(updated);
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-page" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item" style={itemStyle}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', borderRadius: '8px' }} />
                                <div style={{ flex: 1, marginLeft: '20px' }}>
                                    <h4>{item.name}</h4>
                                    <p>${item.price.toFixed(2)}</p>
                                    <div className="qty-control" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </div>
                                    <button onClick={() => handleRemove(item.id)} style={{ marginTop: '10px', color: 'red' }}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary" style={{ marginTop: '30px', textAlign: 'right' }}>
                        <h3>Total: ${total}</h3>
                        <button className="btn" style={{ marginTop: '10px' }}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #eee',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
};

export default Cart;
