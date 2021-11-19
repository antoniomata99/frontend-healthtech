import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/globals/Table.scss'

const Table = ({ children }) => {
  return <div className='Table'>{children}</div>
}

Table.defaultProps = {
  children: null,
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Table }
