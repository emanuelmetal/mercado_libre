import { combineReducers } from 'redux'
import searchBox from './search-box'
import searchResults from './search-results'

const rootReducer = combineReducers({
  searchBox,
  searchResults
})

export default rootReducer
