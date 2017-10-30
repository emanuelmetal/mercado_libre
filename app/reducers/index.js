import { combineReducers } from 'redux'
import searchBox from './search-box'
import searchResults from './search-results'
import item from './item'

const rootReducer = combineReducers({
  searchBox,
  searchResults,
  item
})

export default rootReducer
