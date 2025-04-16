import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Loginservice = () => {
    const user = localStorage.getItem("loginuser")
    return user ? <Outlet /> : <Navigate to="/" />
}

export default Loginservice