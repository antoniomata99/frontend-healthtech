import React from 'react'
import './DataItem.scss'
// * Components
import { Button } from '../'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri'

const DataItem = ({ data = [] }) => {
  return (
    <div className='DataItem'>
      {data.map((item, index) => (
        <h2 className='DataItem__Data-item' key={`${index}--${item.name}`}>
          {item.name}
        </h2>
      ))}
      <div className='DataItem__Buttons'>
        <Button name='Edit' modifier='edit'>
          <RiEdit2Line />
        </Button>
        <Button name='Delete' modifier='delete'>
          <RiDeleteBin6Line />
        </Button>
      </div>
    </div>
  )
}

export { DataItem }
