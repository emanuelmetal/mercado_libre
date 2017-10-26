import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
import items from './results'
const { SEARCH_RESULTS } = actionTypes

const initialState = {
  filters: items.filters[0],
  results: []
}

export default handleActions({
  [SEARCH_RESULTS.GET_ITEMS]: (state) => ({
    ...state,
    results: items.results
  })
}, initialState)
