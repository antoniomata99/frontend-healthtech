import React from 'react'
// * Style
import '../../styles/globals/Form.scss'
// * Components
import { Button } from '../'

const Form = ({ title, children, handleData }) => {
  return (
    <div className='Form'>
      <h4 className='Form__Text'>{title}</h4>
      <form action='' className='Form__Section' onSubmit={(e) => handleData(e)}>
        <div className='Form__Container'>{children}</div>
        <Button name='Add' modifier='create' />
      </form>
    </div>
  )
}

export { Form }
