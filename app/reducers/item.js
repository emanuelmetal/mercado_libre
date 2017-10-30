import { handleActions } from 'redux-actions'
import actionTypes from 'constants/action-types'
import details from './item.json'
const { ITEM } = actionTypes

const initialState = {
  details: {}
}

export default handleActions({
  [ITEM.GET_ITEM_DETAILS]: (state) => ({
    ...state,
    details
  })
}, initialState)
