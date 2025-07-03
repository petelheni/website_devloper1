import React, { useEffect, useState } from 'react';

const Addtocard = () => {
    const [addproduct, setAddproduct] = useState([]);
    //   const [deletedata, setdelete] = useState("");

    useEffect(() => {
        let update = JSON.parse(localStorage.getItem("stproduct")) || [];
        setAddproduct(update);
    }, []);

    const hendledelete = (id) => {
        const filter = addproduct.filter(item => item.id !== id)
        setAddproduct(filter)
        localStorage.setItem("stproduct", JSON.stringify(filter))
    }


    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4">🛒 Your Cart</h1>
                {addproduct.length > 0 ? (
                    addproduct.map((item, index) => (
                        <div className="card mb-3" style={{ maxWidth: "540px" }} key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.category}</h5>
                                        <p className="card-text">
                                            {item.description.length > 100
                                                ? item.description.substring(0, 100) + "..."
                                                : item.description}
                                        </p>
                                        <h6 className="mt-2">Price: RS {item.price}</h6>
                                        <button onClick={() => hendledelete(item.id)} className="btn btn-danger mt-3">Delete Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3 className="text-center text-muted">Cart is Empty 🛒</h3>
                )}
            </div>
        </>
    );
};

export default Addtocard;