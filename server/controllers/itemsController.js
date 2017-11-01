const axios = require('axios')
const _ = require('lodash')
module.exports = getResultItems

function getResultItems (query) {
  return axios.get('https://api.mercadolibre.com/sites/MLA/search', {
    params: query
  })
    .then((response) => handleItemsResponse(response))
}

function handleItemsResponse (response) {
  const results = {
    author: {
      name: 'Emanuel',
      lastname: 'Pereyra'
    },
    items: response.data.results.slice(0, 4).map(item => ({
      id: item.id,
      title: item.title,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      price: {
        amount: item.price,
        currency: item.currency_id
      }
    })),
    categories: _.get(response.data, 'filters[0].values[0].path_from_root', [])
      .map(({ name }) => name)
  }

  return getPictures(results)
    .then((response) => {
      return getCurrencies(response)
    })
}

function getCurrencies (data) {
  return axios.all(data.items.map(item => getCurrency(item.price.currency)))
    .then(axios.spread((...args) => Object.assign(
      {},
      data,
      { items: data.items.map((item, index) => Object.assign(
        {},
        item,
        { price: Object.assign({}, item.price, {
          symbol: args[index].data.symbol,
          decimal_places: args[index].data.decimal_places
        })}
      )
      )}
    )))
}

function getCurrency (currencyId) {
  return axios.get(`https://api.mercadolibre.com/currencies/${currencyId}`)
}

function getPictures (data) {
  return axios.all(data.items.map(item => getPicture(item.id)))
    .then(axios.spread((...args) => Object.assign(
      {},
      data,
      { items: data.items.map((item, index) => Object.assign(
        {},
        item,
        { picture: args[index].data.pictures[0].secure_url })
      )}
    )))
}

function getPicture (itemId) {
  return axios.get(`https://api.mercadolibre.com/items/${itemId}`)
}
