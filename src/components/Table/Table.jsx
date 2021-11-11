import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/globals/Table.scss'
// * Component
import { TableContent } from '../'

const Table = ({ children }) => {
  return <div className='Table'>{children}</div>
}

Table.defaultProps = {
  children: <TableContent />,
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Table }
