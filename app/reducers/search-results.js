import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
const { SEARCH_RESULTS } = actionTypes

const fetch = {
  pending: false,
  error: false
}

const initialState = {
  categories: [],
  items: [],
  fetch
}

export default handleActions({
  [`${SEARCH_RESULTS.GET_ITEMS}_PENDING`]: (state) => ({
    ...state,
    fetch: {
      pending: true,
      error: false
    }
  }),
  [`${SEARCH_RESULTS.GET_ITEMS}_FULFILLED`]: (state, action) => {
    const { items, categories } = action.payload.data
    return {
      ...state,
      items,
      categories,
      fetch
    }
  },
  [`${SEARCH_RESULTS.GET_ITEMS}_REJECTED`]: (state) => ({
    ...state,
    fetch: {
      pending: false,
      error: true
    }
  })
}, initialState)
