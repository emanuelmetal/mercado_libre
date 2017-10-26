import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from 'app/reducers'
import promiseMiddleware from 'redux-promise-middleware'

const loggerMiddleware = createLogger({ collapsed: true })

const devToolsExtension = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension() : f => f

const middlewares = [
  promiseMiddleware(),
  thunk,
  loggerMiddleware
]

const store = createStore(rootReducer,
  compose(applyMiddleware(...middlewares), devToolsExtension))

export default store
