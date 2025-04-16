import './App.css'
import { BrowserRouter as Router, Routes, Route, link } from 'react-router-dom'
import Home from " ./Component/Home"
import About from " ./Component/About"
import Contect from " ./Component/Contect"

function App() {

  return (
    <>
      <router>
        <ul>
          <li><link to="">Main</link></li>
          <li><link to="./component/Home">Home</link></li>
          <li><link to="./component/About">About</link></li>
          <li><link to="./component/Contect">Contect</link></li>

        </ul>

        <Routes>
          <Route element="" parh="/"></Route>
          <Route element={<Home />} path='component/Home'></Route>
          <Route element={<About />} path='component/About'></Route>
          <Route element={<Contect />} path='component/Contect'></Route>
        </Routes>
      </router>

    </>
  )
}
import { Component } from 'react'

export default App
