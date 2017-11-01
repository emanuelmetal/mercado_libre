import React from 'react'
import status from 'constants/status'
import { connect } from 'react-redux'
import { getItemDetails } from 'actions/item'
import { object, func, bool } from 'prop-types'
import './ItemDetails.scss'

class ItemDetails extends React.Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.dispatchGetItemDetails(id)
  }

  render () {
    if (this.props.isFetching || _.isEmpty(this.props.item)) {
      return (<h1>loading...</h1>)
    }
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
              {status[item.condition]} - {item.sold_quantity} Vendidos
            </div>
            <div className='ml-item-details__title'>
              {item.title}
            </div>
            <div className='ml-item-details__price'>
              <span className='ml-item-details__price-symbol'>{price.symbol}</span>
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
  match: object,
  item: object.isRequired,
  isFetching: bool.isRequired,
  dispatchGetItemDetails: func.isRequired
}

const mapStateToProps = state => ({
  item: state.item.details,
  isFetching: state.item.fetch.pending
})

const mapDispatchToProps = dispatch => ({
  dispatchGetItemDetails (itemId) {
    dispatch(getItemDetails(itemId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
