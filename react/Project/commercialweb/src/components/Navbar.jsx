import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or use react-icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-black tracking-tight">
                    StylishShoes
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "text-black underline" : "hover:text-black"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
                    <ul className="space-y-4 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-black underline" : "hover:text-black"
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
