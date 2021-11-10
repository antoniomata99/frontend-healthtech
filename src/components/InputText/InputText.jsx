import React from 'react'
// * Styles
import '../../styles/globals/Input.scss'

const InputText = ({ placeholder, setData }) => {
  
  return (
    <input className='Input' type='text' placeholder={placeholder} required onChange={(e) => setData(e.target.value)}/>
  )
}

export { InputText }
