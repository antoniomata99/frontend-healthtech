import React from 'react'
import PropTypes from 'prop-types'
// * Components
import { TableData } from '../'

const TableContent = ({ children }) => <div className='Table__Content'>{children}</div>

TableContent.defaultProps = {
  children: <TableData />,
}

TableContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export { TableContent }
