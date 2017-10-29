import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
import results from './results'
const { SEARCH_RESULTS } = actionTypes

const initialState = {
  categories: results.categories,
  items: []
}

const { items } = results

export default handleActions({
  [SEARCH_RESULTS.GET_ITEMS]: (state) => ({
    ...state,
    items
  })
}, initialState)
