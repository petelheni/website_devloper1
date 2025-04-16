import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './usestate/Example1'
import Example2 from './usestate/Example2'
import Employee from './usestate/Employee'
import Student from './usestate/Student'
import Apicalling from './useeffect/Apicalling'


function App() {

  return (
    <>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/*<Employee /> */}
      {/* <Student /> */}
      <Apicalling />
    </>
  )
}

export default App