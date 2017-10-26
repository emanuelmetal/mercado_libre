import React from 'react'
import { connect } from 'react-redux'
import { getItems } from 'actions/search-results'
import { func, array } from 'prop-types'

import SearchCard from 'components/SearchCard/SearchCard'

class SearchResult extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatchGetItems()
  }

  render () {
    return (
      <div>
        <div className='breadcrumb'>
          <p>{this.props.breadcrumb.map(path => path.name)}</p>
        </div>
        <div className='results'>
          {this.props.searchResults.map(item => <SearchCard item={item} />)}
        </div>
      </div>
    )
  }
}

SearchResult.propTypes = {
  searchResults: array.isRequired,
  breadcrumb: array.isRequired,
  dispatchGetItems: func.isRequired
}

const mapStateToProps = state => ({
  searchResults: state.searchResults.results,
  breadcrumb: state.searchResults.filters.values[0].path_from_root
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
