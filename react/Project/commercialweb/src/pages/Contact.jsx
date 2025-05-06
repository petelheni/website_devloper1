import React from 'react';
import './Contact.css'; // Optional: create a scoped CSS file or use global CSS

const Contact = () => {
    return (
        <div className="contact-page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Get in Touch</h2>

            <div className="contact-info" style={{ marginBottom: '30px', textAlign: 'center' }}>
                <p><strong>Email:</strong> support@flonestore.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Address:</strong> 123 Flone Street, Fashion City, NY</p>
            </div>

            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    style={inputStyle}
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                    style={inputStyle}
                />
                <button type="submit" className="btn" style={{ width: 'fit-content', alignSelf: 'center' }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

const inputStyle = {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
};

export default Contact;
