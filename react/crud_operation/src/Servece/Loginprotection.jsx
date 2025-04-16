import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Loginprotection = () => {
    const auth = localStorage.getItem("login")
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default Loginprotection