import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import store from './config/store'
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
          component={(props) => (
            <div>
              <AsyncRoute props={props} loadingPromise={System.import('./components/SearchBox/SearchBox')} />
              <div className='container ml-content'>
                <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchResults/SearchResults')} />
              </div>
            </div>
          )}
        />
      </div>
    </Provider>
  )
}

export default App
