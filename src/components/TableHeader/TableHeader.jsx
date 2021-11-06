import React from 'react'

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

export { TableHeader }
