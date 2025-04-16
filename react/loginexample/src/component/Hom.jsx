import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const getuser = localStorage.getItem("loginuser")

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/")
    }
    return (
        <>
            <h1>Welcome, {getuser}
                <button className='btn btn-danger' onClick={logout}>Logout</button>

            </h1>
        </>
    )
}

export default Home