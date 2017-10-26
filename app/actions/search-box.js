import { createAction } from 'redux-actions'
import actionTypes from 'constants/action-types'

const { SEARCH_BOX } = actionTypes

export const setSearchTerm = createAction(SEARCH_BOX.SET_SEARCH_TERM)
