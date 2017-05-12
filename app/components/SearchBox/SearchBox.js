import React from 'react'
import { connect } from 'react-redux'
import { string, func, object } from 'prop-types'
import { setSearchTerm } from '../../redux/actionCreators'
import './SearchBox.scss'
import logo from '../../styles/img/Logo_ML.png'

const SearchBox = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    // this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top ml-search-box'>
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
                    placeholder='Search Here'
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
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
