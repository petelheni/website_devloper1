import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

const Protectrouts = () => {
    const auth = JSON.parse(sessionStorage.getItem("userdata"));

    return (auth) ? <Outlet /> : <Navigate to="/Login" />
}

export default Protectrouts