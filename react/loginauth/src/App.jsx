import React from 'react'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App