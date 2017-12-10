import React from 'react'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import AppWithNavigationState from './appNavigator';

const store = configureStore()
const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

export default App
