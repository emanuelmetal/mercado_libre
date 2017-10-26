import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'

const { SEARCH_BOX } = actionTypes

const initialState = {
  searchTerm: ''
}

export default handleActions({
  [SEARCH_BOX.SET_SEARCH_TERM]: (state, action) => ({
    ...state,
    searchTerm: action.payload
  })
}, initialState)
