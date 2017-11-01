const axios = require('axios')

module.exports = getItem

function getItem (item) {
  return axios.get('https://api.mercadolibre.com/items/' + item)
    .then((response) => handleItemResponse(response))
}

function handleItemResponse (response) {
  const item = {
    author: {
      name: 'Emanuel',
      lastname: 'Pereyra'
    },
    item: {
      id: response.data.id,
      title: response.data.title,
      condition: response.data.condition,
      free_shipping: response.data.shipping.free_shipping,
      picture: response.data.pictures[0].secure_url,
      price: {
        amount: response.data.price,
        currency: response.data.currency_id
      },
      sold_quantity: response.data.sold_quantity
    }
  }
  return getDescription(item)
    .then(response => {
      return getCurrency(response)
    })
}

function getDescription (data) {
  return axios.get(`https://api.mercadolibre.com/items/${data.item.id}/description`)
    .then(response => Object.assign(
      {},
      data,
      { item: Object.assign(
        {},
        data.item,
        {
          description: response.data.text
        })}
    ))
}

function getCurrency (data) {
  return axios.get(`https://api.mercadolibre.com/currencies/${data.item.price.currency}`)
    .then(response => Object.assign(
      {},
      data,
      { item: Object.assign(
        {},
        data.item,
        { price: Object.assign(
          {},
          data.item.price,
          {
            symbol: response.data.symbol,
            decimal_places: response.data.decimal_places
          })
        })}
    ))
}
