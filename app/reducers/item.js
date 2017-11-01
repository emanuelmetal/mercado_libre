import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
const { ITEM } = actionTypes

const fetch = {
  pending: false,
  error: false
}

const initialState = {
  details: {},
  fetch
}

export default handleActions({
  [`${ITEM.GET_ITEM_DETAILS}_PENDING`]: (state, action) => ({
    ...state,
    fetch: {
      ...state.fetch,
      pending: true
    }
  }),
  [`${ITEM.GET_ITEM_DETAILS}_FULFILLED`]: (state, action) => ({
    ...state,
    details: action.payload.data.item,
    fetch
  }),
  [`${ITEM.GET_ITEM_DETAILS}_REJECTED`]: (state, action) => ({
    ...state,
    fetch: {
      pending: false,
      error: true
    }
  })
}, initialState)
