import React from 'react'
import Home from './components/Home'
import configureStore from './configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
