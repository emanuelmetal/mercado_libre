import React from 'react'
import { object } from 'prop-types'

class AsyncRoute extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  getInitialState () {
    return {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loadingPromise.then((module) => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }

  render () {
    return this.state.loaded ? <this.component {...this.props.props} /> : <h1>loading...</h1>
  }
}

AsyncRoute.propTypes = {
  props: object,
  loadingPromise: object
}

export default AsyncRoute
