import React from 'react'

const Footer = () => {

    return (
        <footer className="bg-dark text-white text-center py-4 shadow-lg">
            <div className="container">
                <p className="mb-1">© {new Date().getFullYear()} YourStoreName. All rights reserved.</p>
                <p className="mb-0">
                    <a href="#" className="text-light me-3">Privacy Policy</a>
                    <a href="#" className="text-light me-3">Terms</a>
                    <a href="#" className="text-light">Contact Us</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer