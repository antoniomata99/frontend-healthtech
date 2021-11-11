import React from 'react'
import PropTypes from 'prop-types'

const TableContent = ({ children }) => <div className='Table__Content'>{children}</div>

TableContent.defaultProps = {
  children: null,
}

TableContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export { TableContent }
