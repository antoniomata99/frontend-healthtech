import React from 'react'
import './Form.scss'
// * Components
import { Button } from '../'

const Form = ({ title = 'Add', buttonText = 'Create', children }) => {
  return (
    <div className='Form-Container'>
      <h4 className='Form-Container__Text'>{title}</h4>
      <form action='' className='Form-Section'>
        {children}
        <Button name={buttonText} modifier='create' />
      </form>
    </div>
  )
}

export { Form }
