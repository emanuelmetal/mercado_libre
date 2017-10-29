import React from 'react'
import { array } from 'prop-types'

import './Breadcrumb.scss'

const Breadcrumb = ({path}) => (
  <div className='ml-breadcrumb'>
    <ol>
      {path.map(item => (<li className='ml-breadcrumb__item'>{item}</li>))}
    </ol>
  </div>
)

Breadcrumb.propTypes = {
  path: array
}

export default Breadcrumb
