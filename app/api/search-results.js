import axios from 'axios'

export function fetchResults (searchTerm) {
  return axios.get('http://localhost:3000/api/items', {
    params: {
      q: searchTerm
    }
  })
}
