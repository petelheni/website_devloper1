import React, { useState } from 'react'

const Register = () => {
    const [regdata, setregdata] = useState({
        name: "",
        email: "",
        pass: "",
    })

    const handlechange = (e) => {
        setregdata({ ...regdata, [e.target.name]: e.target.value })
    }
    const handlesubmite = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch("http://localhost:5173/Register", {
                method: "post",
                body: JSON.stringify(regdata)
            })

            if (result) {
                alert("Regester succsecfull")
                setregdata({
                    name: "",
                    email: "",
                    pass: "",

                });
            } else {
                alert("Regester fail")
            }

        } catch (error) {
            console.error("Error during registration:", error);
            alert("server error");

        }
    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
                <div className="container p-4 shadow rounded-2 bg-white" style={{ maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={handlesubmite}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input onChange={handlechange} value={regdata.name} name='name' type="text" className="form-control" id="username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input onChange={handlechange} value={regdata.email} name='email' type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={handlechange} value={regdata.pass} name='pass' type="password" className="form-control" id="password" required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
};


export default Register