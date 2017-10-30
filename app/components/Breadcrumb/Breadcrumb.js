import React from 'react'
import { array } from 'prop-types'

import './Breadcrumb.scss'

const Breadcrumb = ({path}) => (
  <div className='ml-breadcrumb'>
    <ol>
      {path.map((item, index) => (<li key={index} className='ml-breadcrumb__item'>{item}</li>))}
    </ol>
  </div>
)

Breadcrumb.propTypes = {
  path: array
}

export default Breadcrumb
