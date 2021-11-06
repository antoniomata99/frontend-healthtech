import React from 'react'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
// * Components
import { Button } from '../'

const TableItem = ({ children, view = false, handleModal, edit = true }) => {
  return (
    <div className='Table__Item'>
      {children}
      <div className='Table__Data'>
        {!!edit && (
          <Button modifier='edit' handle={handleModal}>
            <RiEdit2Line />
          </Button>
        )}
        {!!view && (
          <Button modifier='view'>
            <RiEyeFill />
          </Button>
        )}
        <Button modifier='delete'>
          <RiDeleteBin6Line />
        </Button>
      </div>
    </div>
  )
}

export { TableItem }
