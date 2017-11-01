import React from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { string, func, object } from 'prop-types'
import { setSearchTerm } from 'actions/search-box'
import { getItems } from 'actions/search-results'
import './SearchBox.scss'
import logo from '../../styles/img/Logo_ML.png'

class SearchBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  }

  handleSearchSubmit (event) {
    event.preventDefault()
    console.log(this.props.searchTerm)
    this.props.dispatchGetItems()
    this.props.history.push(`/items?search=${this.props.searchTerm}`)
  }

  componentDidMount () {
    const { search = '' } = queryString.parse(this.props.location.search)
    if (search !== '') {
      this.props.dispatchSetSearchTerm(search)
      this.props.dispatchGetItems()
    }
  }

  render () {
    console.log('sbRender')
    return (
      <nav className='navbar navbar-inverse navbar-static-top ml-search-box'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a className='navbar-brand' href='#'>
              <img alt='Mercado Libre logo' src={logo} />
            </a>
          </div>
          <div className='navbar-collapse collapse' id='searchbar'>
            <form className='navbar-form ml-search-box__form' onSubmit={this.handleSearchSubmit}>
              <div className='form-group'>
                <div className='input-group'>
                  <input
                    className='form-control'
                    onChange={this.handleSearchTermChange}
                    name='search'
                    value={this.props.searchTerm}
                    placeholder='Nunca dejes de buscar'
                    autoComplete='off'
                    autoFocus='autofocus'
                    type='text' />
                  <span className='input-group-addon'><span className='glyphicon glyphicon-search' /></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

SearchBox.propTypes = {
  location: object,
  searchTerm: string,
  history: object,
  dispatchSetSearchTerm: func,
  dispatchGetItems: func.isRequired
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchBox.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    },
    dispatchGetItems () {
      dispatch(getItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
