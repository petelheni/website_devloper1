import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const handleSubmit = (newItem) => {
        const data = JSON.parse(sessionStorage.getItem("userdata"));

        if (data) {
            let getdata = JSON.parse(localStorage.getItem("stproduct")) || [];
            let newdata = [...getdata, newItem];
            localStorage.setItem("stproduct", JSON.stringify(newdata));
            alert("Product added to cart successfully!");
        } else {
            if (confirm("Please login first to add products to your cart. Go to login page?")) {
                navigate("/Login");
            }
        }
    };


    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">🛍️ Our Products</h1>
            <div className="row">
                {product.map(item => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.image}
                                className="card-img-top p-3"
                                alt={item.title}
                                style={{ height: "250px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-truncate">{item.category}</h5>
                                <p className="card-text small text-muted" style={{ height: "80px", overflow: "hidden" }}>
                                    {item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
                                </p>
                                <h6 className="mt-auto">Price: RS {item.price}</h6>
                                <button onClick={() => handleSubmit(item)} className="btn btn-primary mt-3">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;