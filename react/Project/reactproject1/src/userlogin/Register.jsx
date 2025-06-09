import React, { useState } from 'react';

const Register = () => {
    const [regdata, setRegdata] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const handleChange = (e) => {
        setRegdata({ ...regdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch("http://localhost:3000/regdata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(regdata),
            });

            if (result.ok) {
                alert("Register successful");
                setRegdata({ name: "", email: "", pass: "" });
            } else {
                alert("Register failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Server error");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h3 className="text-center mb-4">Create Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            onChange={handleChange}
                            name="name"
                            value={regdata.name}
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            value={regdata.email}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            onChange={handleChange}
                            name="pass"
                            value={regdata.pass}
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <button className="btn btn-primary w-100" type="submit">Register</button>
                </form>
                <p className="text-center mt-3 mb-0">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
