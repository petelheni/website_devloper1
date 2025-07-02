import React from 'react'
import './App.css'
import Addtocard from './components/Addtocard'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './userlogin/Login'
import Register from './userlogin/Register'
import Protectrouts from './components/protectrouts'
//import Footer from './footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Product />} path='/'></Route>

          <Route element={<Protectrouts />} path="Addtocard">
            <Route element={<Addtocard />} path='/Addtocard'></Route>
          </Route>

          <Route element={<Login />} path='/Login'></Route>
          <Route element={<Register />} path='/Register'></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App