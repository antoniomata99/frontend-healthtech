import React from 'react'
import PropTypes from 'prop-types'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
// * Components
import { Button } from '../'

const TableItem = ({ children, view, handleEdit, handleDelete, edit, remove, data, id }) => {
  return (
    <div className='Table__Item'>
      {children}
      <div className='Table__Data'>
        {!!edit && (
          <Button modifier='edit' handle={() => handleEdit(data)}>
            <RiEdit2Line />
          </Button>
        )}
        {!!view && (
          <Button modifier='view'>
            <RiEyeFill />
          </Button>
        )}
        {!!remove && (
          <Button modifier='delete' handle={() => handleDelete(id)}>
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
  children: [],
}

TableItem.propTypes = {
  view: PropTypes.bool,
  edit: PropTypes.bool,
  remove: PropTypes.bool,
  handleModal: PropTypes.func,
  children: PropTypes.array.isRequired,
}

export { TableItem }
