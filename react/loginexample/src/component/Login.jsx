import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [getval, setGetval] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setGetval({ ...getval, [e.target.name]: e.target.value })
    }
    const loginsuccess = (e) => {
        e.preventDefault()
        let getdata = JSON.parse(localStorage.getItem("alluser"))
        let user = getdata.find(items => items.username === getval.username && items.password === getval.password)
        if (user) {
            localStorage.setItem("loginuser", getval.username)
            navigate("/Home")
        } else {
            alert("Invalid username and password")
        }
    }

    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-3 mt-5'>
                    <h2>User Login</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" name="username" value={getval.username} placeholder='Username' required className='form-control' onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <input type="password" name="password" value={getval.password}
                                placeholder='Password' required className='form-control' onChange={handleChange} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary' onClick={loginsuccess}>Login</button>
                        </div>
                        <div className="col-12">
                            <p>
                                New User?
                                <Link to="/Registration">Register here</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login