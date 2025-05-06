import { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
    { id: 1, name: "Classic Sneakers", price: 79.99, image: "/assets/shoe1.jpg" },
    { id: 2, name: "Running Shoes", price: 89.99, image: "/assets/shoe2.jpg" },
    { id: 3, name: "Leather Boots", price: 119.99, image: "/assets/shoe3.jpg" },
    { id: 4, name: "Slip-On Canvas", price: 64.99, image: "/assets/shoe4.jpg" },
    { id: 5, name: "Trail Runners", price: 94.99, image: "/assets/shoe5.jpg" },
    { id: 6, name: "Skater Shoes", price: 59.99, image: "/assets/shoe6.jpg" },
];

const Products = () => {
    const [search, setSearch] = useState("");

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Shop All Shoes</h1>

                {/* Search bar */}
                <div className="mb-8 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search shoes..."
                        className="border border-gray-300 px-4 py-2 w-full max-w-md rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Product grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
