import React from 'react'
import Addtodo from './Pages/Addtodos'
import Showtodo from './Pages/Showtodos'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
        <Addtodos />
        <Showtodos />
      </Provider> */}

      <Addtodos />
      <Showtodos />
    </>
  )
}

export default App