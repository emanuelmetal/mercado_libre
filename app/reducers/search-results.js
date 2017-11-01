import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
// import results from './results'
const { SEARCH_RESULTS } = actionTypes

const initialState = {
  categories: [],
  items: []
}

// const { items, categories } = results

export default handleActions({
  [`${SEARCH_RESULTS.GET_ITEMS}_FULFILLED`]: (state, action) => {
    const { items, categories } = action.payload.data
    return {
      ...state,
      items,
      categories
    }
  }
}, initialState)
