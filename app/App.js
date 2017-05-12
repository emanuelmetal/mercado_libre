import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store'
import AsyncRoute from './AsyncRoute'
import './styles/ml.scss'

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Route
          exactly
          pattern='/'
          component={(props) =>
            <AsyncRoute props={props} loadingPromise={System.import('./components/SearchBox/SearchBox')} />}
        />
      </div>
    </Provider>
  )
}

export default App
