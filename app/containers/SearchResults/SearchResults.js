import React from 'react'
import { connect } from 'react-redux'
import { bool, array } from 'prop-types'

import SearchCard from 'components/SearchCard/SearchCard'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import './SearchResults.scss'

class SearchResult extends React.Component {
  render () {
    if (this.props.isFetching || _.isEmpty(this.props.items)) {
      return (<h1>loading...</h1>)
    }
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
  isFetching: bool.isRequired
}

const mapStateToProps = state => ({
  items: state.searchResults.items,
  breadcrumb: state.searchResults.categories,
  isFetching: state.searchResults.fetch.pending
})

export default connect(mapStateToProps)(SearchResult)
