import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const isLogin = sessionStorage.getItem("userdata") !== null;

    const handleLogout = () => {
        sessionStorage.removeItem("userdata");
        alert("Logout successful!");
        navigate("/Login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active">Home</NavLink>
                            </li>
                            {isLogin ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/Addtocard" className="nav-link active">Add to Cart</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/Register" className="nav-link active">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Login" className="nav-link active">Login</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                        <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                            {isLogin && (
                                <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>
                                    Logout
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;