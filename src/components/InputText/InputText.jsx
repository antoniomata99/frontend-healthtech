import React from 'react'
// * Styles
import '../../styles/globals/Input.scss'

const InputText = ({ placeholder }) => {
  return (
    <input className='Input' type='text' placeholder={placeholder} required />
  )
}

export { InputText }
