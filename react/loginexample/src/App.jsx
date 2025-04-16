import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Registration from './Component/Registration'
import Loginservice from './Service/Loginservice'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Registration' element={<Registration />}>
          </Route>
          <Route path='/Home' element={<Loginservice />}>
            <Route path='/Home' element={<Home />} ></Route>
          </Route>

        </Routes>
      </Router >
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <Home /> */}
    </>
  )
}

export default App