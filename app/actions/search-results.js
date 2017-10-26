import { createAction } from 'redux-actions'
import actionTypes from 'constants/action-types'

const { SEARCH_RESULTS } = actionTypes

export const getItems = createAction(SEARCH_RESULTS.GET_ITEMS)
