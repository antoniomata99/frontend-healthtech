import React from 'react'
import PropTypes from 'prop-types'
// * Components
import { TableItem } from '../'

const TableData = ({ data }) => <div className='Table__Data'>{data}</div>

TableData.defaultProps = {
  data: '',
}

TableData.propTypes = {
  data: PropTypes.string.isRequired,
}

export { TableData }
