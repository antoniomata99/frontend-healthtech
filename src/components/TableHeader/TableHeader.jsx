import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ titles }) => {
  return (
    <div className='Table__Header'>
      {titles.map((title, index) => (
        <h2 className='Table__Title' key={`table-header--${index}`}>
          {title}
        </h2>
      ))}
      <h2 className='Table__Title'>Actions</h2>
    </div>
  )
}

TableHeader.defaultProps = {
  titles: ['Title 1 test', 'Title 2 test', 'Title 3 test'],
}

TableHeader.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export { TableHeader }
