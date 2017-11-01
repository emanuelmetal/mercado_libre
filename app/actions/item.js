import { createAction } from 'redux-actions'
import actionTypes from 'constants/action-types'
import * as itemDetails from 'api/item'
const { ITEM } = actionTypes

export const fetch = createAction(ITEM.GET_ITEM_DETAILS, (itemId) => {
  const promise = itemDetails.fetchItem(itemId)

  return { promise }
}, _.identity)

export function getItemDetails (itemId) {
  return (dispatch, getState) => {
    dispatch(fetch(itemId))
  }
}
