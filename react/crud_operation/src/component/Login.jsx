import js from '@eslint/js'
import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    localStorage.setItem("adminlogin", JSON.stringify({
        username: "admin",
        password: "admin@123"
    }))

    const handleLogin = (e) => {
        e.preventDefault()
        let getadmin = JSON.parse(localStorage.getItem("adminlogin"))
        if (input.username === getadmin.username && input.password === getadmin.password) {
            localStorage.setItem("login", input.username)
            navigate("/Home")
        } else {
            alert("invalid")
        }
    }

    return (
        <>
            <div className='container mt-5 py-5'>
                <form onSubmit={handleLogin} className='w-50 mx-auto shadow p-3'>
                    <h2>Login</h2>
                    <div className="row g-3">
                        <div className="col-12">
                            <input type="text" placeholder='Username' className='form-control' required onChange={handlechange} name="username" value={input.username} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder='Password' className='form-control' required onChange={handlechange} name="password" value={input.password} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Login