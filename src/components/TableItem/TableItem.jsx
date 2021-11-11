import React from 'react'
import PropTypes from 'prop-types'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
// * Components
import { Button, TableData } from '../'

const TableItem = ({ children, view, handleModal, edit, remove }) => {
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
        {!!remove && (
          <Button modifier='delete'>
            <RiDeleteBin6Line />
          </Button>
        )}
      </div>
    </div>
  )
}

TableItem.defaultProps = {
  view: false,
  edit: true,
  remove: true,
  handleModal: null,
  children: <TableData />,
}

TableItem.propTypes = {
  view: PropTypes.bool,
  edit: PropTypes.bool,
  remove: PropTypes.bool,
  handleModal: PropTypes.func,
  children: PropTypes.element.isRequired,
}

export { TableItem }
