import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [logdata, setlogdata] = useState({
        email: "",
        pass: ""
    })

    const handlechange = (e) => {
        setlogdata({ ...logdata, [e.target.name]: e.target.value })
    }

    const handlesubmite = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:5173/Register");
            const users = await response.json()

            const matchuser = users.find(
                (user) => user.email === logdata.email && user.pass === logdata.pass
            )

            if (matchuser) {
                alert("Login successfull")
                sessionStorage.setItem("userdata", JSON.stringify(matchuser))
                setlogdata({
                    email: "",
                    pass: ""
                })
                navigate("/")
            } else if (confirm("Invalid email or password. Please register.")) {
                navigate("/Registar")
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
                <div className="container p-4 shadow rounded bg-white rounded-2" style={{ maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handlesubmite}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input onChange={handlechange} value={logdata.email} name='email' type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={handlechange} value={logdata.pass} name='pass' type="password" className="form-control" id="password" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check" required />
                            <label className="form-check-label" htmlFor="check">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login