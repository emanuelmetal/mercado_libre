import { createAction } from 'redux-actions'
import actionTypes from 'constants/action-types'

const { ITEM } = actionTypes

export const getItemDetails = createAction(ITEM.GET_ITEM_DETAILS)
