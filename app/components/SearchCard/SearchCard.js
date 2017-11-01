import React from 'react'
import status from 'constants/status'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import './SearchCard.scss'

const SearchCard = ({ item }) => (
  <div className='ml-search-card'>
    <div className='ml-search-card__image'>
      <Link to={`/items/${item.id}`} className='figure item-image item__js-link'>
        <img alt={item.title} src={item.picture} className='lazy-load' />
      </Link>
    </div>
    <div className='ml-search-card__info'>
      <div className='ml-search-card__price'>
        <span className='ml-search-card__price-symbol'>{item.price.symbol}</span>
        <span className='ml-search-card__price-amount'>{item.price.amount}</span>
        {item.free_shipping ? <span className='ml-search-card__freeshipping' /> : ''}
      </div>
      <div className='ml-search-card__description'>
        {item.title}
      </div>
      <div className='ml-search-card__condition'>
        {status[item.condition]}
      </div>
    </div>
  </div>
)

SearchCard.propTypes = {
  item: object
}

export default SearchCard
