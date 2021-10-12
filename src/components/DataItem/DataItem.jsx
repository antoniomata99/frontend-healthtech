import React from 'react'
import './DataItem.scss'
// * Components
import { Button } from '../'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri'

const DataItem = ({ data = [] }) => {
  console.log(data[0].name)
  return (
    <div className='DataItem'>
      {data.length > 0 &&
        data.map((item, index) => (
          <h2 className='DataItem__Data-item' key={`${index}--${item}`}>
            {item}
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
