import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/components/TableData.scss'

const TableData = ({ data }) => <div className='Table__Data'>{data}</div>

TableData.defaultProps = {
  data: '' || 0,
}

TableData.propTypes = {
  data: PropTypes.string.isRequired || PropTypes.number.isRequired,
}

export { TableData }
