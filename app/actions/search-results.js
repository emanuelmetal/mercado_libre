import { createAction } from 'redux-actions'
import actionTypes from 'constants/action-types'
import * as searchResults from 'api/search-results'
const { SEARCH_RESULTS } = actionTypes

export const fetch = createAction(SEARCH_RESULTS.GET_ITEMS, (searchTerm) => {
  const promise = searchResults.fetchResults(searchTerm)

  return { promise }
}, _.identity)

export function getItems (searchTerm) {
  return (dispatch, getState) => {
    const { searchTerm } = getState().searchBox
    dispatch(fetch(searchTerm))
  }
}
