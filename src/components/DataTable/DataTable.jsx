import React from 'react'
import './DataTable.scss'

const DataTable = ({ titles = [], children }) => {
  return (
    <div className='DataTable'>
      <div className='DataTable__Header'>
        {titles.map((title, index) => (
          <h3 className='DataTable__Header-item' key={`${index}--${title}`}>
            {title}
          </h3>
        ))}
        <h3 className='DataTable__Header-item'>Actions</h3>
      </div>
      <div className='DataTable__Body'>{children}</div>
    </div>
  )
}

export { DataTable }
