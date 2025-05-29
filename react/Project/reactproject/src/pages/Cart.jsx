import React from 'react';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('stproduct')) || [];

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul className="list-group">
                    {cartItems.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <span>{item.title}</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
