import React from 'react'
import './DataItem.scss'
// * Components
import { Button } from '../'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'

const DataItem = ({ data = [], view = false }) => {
  return (
    <div className='DataItem'>
      {data.length > 0 &&
        data.map((item, index) => (
          <h2 className='DataItem__Data-item' key={`${index}--${item}`}>
            {item}
          </h2>
        ))}
      <div className='DataItem__Buttons'>
        <Button modifier='edit'>
          <RiEdit2Line />
        </Button>
        <Button modifier='delete'>
          <RiDeleteBin6Line />
        </Button>
        {view && (
          <Button modifier='view'>
            <RiEyeFill />
          </Button>
        )}
      </div>
    </div>
  )
}

export { DataItem }
