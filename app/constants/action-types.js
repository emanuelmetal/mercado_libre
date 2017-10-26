import keyMirror from 'key-mirror-nested'

export default keyMirror({
  SEARCH_BOX: {
    SET_SEARCH_TERM: null
  },
  SEARCH_RESULTS: {
    GET_ITEMS: null
  }
}, { connChar: '/' })
