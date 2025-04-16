import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addtodos from './todoapp/Addtodos'
import Showtodo from './todoapp/Showtodo'
import Todos from './todoapp/Todos'

const App = () => {
  return (
    <>
      <Addtodos />
      {/* <Showtodo /> */}
      <Todos />
    </>
  )
}

export default App