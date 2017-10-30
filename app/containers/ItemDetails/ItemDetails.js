import React from 'react'
import { connect } from 'react-redux'
import { getItemDetails } from 'actions/item'
import { object, func } from 'prop-types'

import './ItemDetails.scss'

class ItemDetails extends React.Component {
  componentDidMount () {
    this.props.dispatchGetItemDetails()
  }

  render () {
    const { item } = this.props
    const { price = {} } = item
    return (
      <div className='ml-item-details'>
        <div className='ml-item-details__upper-details'>
          <div className='ml-item-details__image'>
            <img alt={item.title} src={item.picture} className='lazy-load' />
          </div>
          <div className='ml-item-details__info'>
            <div className='ml-item-details__condition'>
              {item.condition} - {item.sold_quantity} Vendidos
            </div>
            <div className='ml-item-details__title'>
              {item.title}
            </div>
            <div className='ml-item-details__price'>
              <span className='ml-item-details__price-symbol'>{price.currency}</span>
              <span className='ml-item-details__price-amount'>{price.amount}</span>
              {item.free_shipping ? <span className='ml-item-details__freeshipping' /> : ''}
            </div>
            <button type='button' className='btn ml-item-details__button btn-lg'>Comprar</button>
          </div>
        </div>
        <div className='ml-item-details__description'>
          <h2>Descripción Producto</h2>
          <div dangerouslySetInnerHTML={(
            () => ({ __html: item.description })
          )()} />
        </div>
      </div>
    )
  }
}

ItemDetails.propTypes = {
  item: object.isRequired,
  dispatchGetItemDetails: func.isRequired
}

const mapStateToProps = state => ({
  item: state.item.details
})

const mapDispatchToProps = dispatch => ({
  dispatchGetItemDetails () {
    dispatch(getItemDetails())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
