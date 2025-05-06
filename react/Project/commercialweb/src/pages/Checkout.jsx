import React, { useState } from 'react';
import './Checkout.css'; // Optional for styling

const Checkout = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        // TODO: Integrate with backend/payment processor
    };

    const cartTotal = 149.98; // Static for now, could be dynamic

    return (
        <div className="checkout-page" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Checkout</h2>
            <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                {/* Billing Details */}
                <form onSubmit={handleSubmit} className="billing-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3>Billing Details</h3>
                    <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Street Address" value={form.address} onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
                    <input type="text" name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} required />
                    <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
                    <button type="submit" className="btn">Place Order</button>
                </form>

                {/* Order Summary */}
                <div className="order-summary" style={{ backgroundColor: '#fafafa', padding: '20px', borderRadius: '8px' }}>
                    <h3>Order Summary</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={summaryItemStyle}>
                            <span>White Sneakers x1</span>
                            <span>$59.99</span>
                        </li>
                        <li style={summaryItemStyle}>
                            <span>Black Running Shoes x1</span>
                            <span>$89.99</span>
                        </li>
                        <hr />
                        <li style={{ ...summaryItemStyle, fontWeight: 'bold' }}>
                            <span>Total:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const summaryItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
};

export default Checkout;
