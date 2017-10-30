import React from 'react'
import { Route, Router } from 'react-router'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import store from './config/store'
import AsyncRoute from './AsyncRoute'
import './styles/ml.scss'

const history = createBrowserHistory()

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className='app'>
          <Route
            exact
            path='/'
            component={(props) => (
              <div>
                <AsyncRoute props={props} loadingPromise={System.import('./components/SearchBox/SearchBox')} />
                <div className='container ml-content'>
                  <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchResults/SearchResults')} />
                </div>
              </div>
            )}
          />
          <Route
            path='/item'
            component={(props) => (
              <div>
                <AsyncRoute props={props} loadingPromise={System.import('./components/SearchBox/SearchBox')} />
                <div className='container ml-content'>
                  <AsyncRoute props={props} loadingPromise={System.import('./containers/ItemDetails/ItemDetails')} />
                </div>
              </div>
            )}
          />
        </div>
      </Router>
    </Provider>
  )
}

export default App
