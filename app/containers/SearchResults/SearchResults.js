import React from 'react'
import { connect } from 'react-redux'
import { getItems } from 'actions/search-results'
import { func, array } from 'prop-types'

import SearchCard from 'components/SearchCard/SearchCard'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import './SearchResults.scss'

class SearchResult extends React.Component {
  componentDidMount () {
    this.props.dispatchGetItems()
  }

  render () {
    const { breadcrumb, items } = this.props
    return (
      <div className='ml-search-results'>
        <Breadcrumb path={breadcrumb} />
        <ol className='ml-search-results__items'>
          {items.map(item => <li className='ml-search-results__item' key={item.id} ><SearchCard item={item} /></li>)}
        </ol>
      </div>
    )
  }
}

SearchResult.propTypes = {
  items: array.isRequired,
  breadcrumb: array.isRequired,
  dispatchGetItems: func.isRequired
}

const mapStateToProps = state => ({
  items: state.searchResults.items,
  breadcrumb: state.searchResults.categories
})

const mapDispatchToProps = dispatch => (
  {
    dispatchGetItems () {
      dispatch(getItems())
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)

// https://api.mercadolibre.com/sites/MLA/search?q=ipod#json
// https://api.mercadolibre.com/items/MLA666799963#json
// https://api.mercadolibre.com/items/MLA666799963/description
// https://api.mercadolibre.com/categories/MLA31594
