import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
    let navigate = useNavigate()

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleChanges = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // event for store data
    const savedata = (e) => {
        e.preventDefault()
        let getdata = JSON.parse(localStorage.getItem("alluser")) || []
        let existing = [...getdata, input]
        localStorage.setItem("alluser", JSON.stringify(existing))
        alert("Registration successfully")
        navigate("/")
    }
    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-3 mt-5' onSubmit={savedata}>
                    <h2>User Registration</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" name="username" placeholder='Username' required className='form-control' onChange={handleChanges} value={input.username} />
                        </div>
                        <div className="col-12">
                            <input type="text" name="email" placeholder='Email' required className='form-control' onChange={handleChanges} value={input.email} />
                        </div>
                        <div className="col-12">
                            <input type="password" name="password"
                                placeholder='Password' required className='form-control' onChange={handleChanges} value={input.password} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary' >Register</button>
                        </div>
                        <div className="col-12">
                            <p>
                                Have already an account?
                                <Link to="/">Go to login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration