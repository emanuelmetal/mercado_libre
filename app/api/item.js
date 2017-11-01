import axios from 'axios'

export function fetchItem (itemId) {
  return axios.get(`http://localhost:3000/api/items/${itemId}`)
}
