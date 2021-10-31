import React from 'react'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
// * Components
import { Button } from '../'

const TableItem = ({ children, view }) => {
  return (
    <div className='Table__Item'>
      {children}
      <div className='Table__Data'>
        <Button modifier='edit'>
          <RiEdit2Line />
        </Button>
        <Button modifier='delete'>
          <RiDeleteBin6Line />
        </Button>
        {!!view && (
          <Button modifier='view'>
            <RiEyeFill />
          </Button>
        )}
      </div>
    </div>
  )
}

export { TableItem }
