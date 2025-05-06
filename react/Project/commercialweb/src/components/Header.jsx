import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon library

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-black tracking-wide">
                    StylishShoes
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
                    <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/products" className="block py-2" onClick={() => setMenuOpen(false)}>
                        Products
                    </Link>
                    <Link to="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
