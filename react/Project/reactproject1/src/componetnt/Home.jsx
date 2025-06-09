import React, { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);

    const addToCart = (item) => {
        // Use functional update for safety
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = existingCart.findIndex((product) => product.id === item.id);

        if (index !== -1) {
            existingCart[index].quantity += 1;
        } else {
            existingCart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert(`Added "${item.title}" to cart!`);
    };

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-danger">{error}</p>;

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Featured Products</h2>
            <div className="row">
                {data.slice(0, 8).map((item) => (
                    <div key={item.id} className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.image}
                                className="card-img-top p-3"
                                alt={`Image of ${item.title}`}
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title" style={{ fontSize: "16px" }}>
                                    {item.title}
                                </h5>
                                <p className="card-text text-muted" style={{ fontSize: "14px" }}>
                                    {item.category}
                                </p>
                                <p className="fw-bold">RS {item.price}</p>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="btn btn-sm btn-primary mt-auto"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
