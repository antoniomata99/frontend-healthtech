import React from 'react'

const TableHeader = ({ titles }) => {
  return (
    <div className='Table__Header'>
      {titles.map((title) => (
        <h2 className='Table__Title'>{title}</h2>
      ))}
      <h2 className='Table__Title'>Actions</h2>
    </div>
  )
}

export { TableHeader }
