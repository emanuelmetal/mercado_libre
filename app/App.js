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
        <div className='app ml-content'>
          <Route
            exact
            path='/'
            component={(props) => (
              <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchBox/SearchBox')} />
            )}
          />
          <Route
            exact
            path='/items'
            component={(props) => (
              <div>
                <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchBox/SearchBox')} />
                <div className='container'>
                  <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchResults/SearchResults')} />
                </div>
              </div>
            )}
          />
          <Route
            path='/items/:id'
            component={(props) => (
              <div>
                <AsyncRoute props={props} loadingPromise={System.import('./containers/SearchBox/SearchBox')} />
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
