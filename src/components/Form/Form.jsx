import React from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/globals/Form.scss'
// * Components
import { Button } from '../'

const Form = ({ title, children, handleData, isUpdate }) => {
  return (
    <div className='Form'>
      <h4 className='Form__Text'>{title}</h4>
      <form action='' className='Form__Section' onSubmit={(e) => handleData(e)}>
        <div className='Form__Container'>{children}</div>
        <Button name={!!isUpdate ? 'Update' : 'Add'} modifier={isUpdate ? 'update' : 'create'} />
      </form>
    </div>
  )
}

Form.defaultProps = {
  title: 'Form test',
  children: null,
  handleData: null,
  isUpdate: false,
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleData: PropTypes.func,
  isUpdate: PropTypes.bool,
}

export { Form }
