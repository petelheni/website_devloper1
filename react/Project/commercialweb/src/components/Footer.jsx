import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react"; // or use react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">StylishShoes</h2>
                    <p className="text-gray-400">
                        Your one-stop shop for stylish and comfortable footwear.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><Facebook /></a>
                        <a href="#" className="hover:text-white"><Instagram /></a>
                        <a href="#" className="hover:text-white"><Twitter /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-10 text-sm">
                &copy; {new Date().getFullYear()} StylishShoes. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
