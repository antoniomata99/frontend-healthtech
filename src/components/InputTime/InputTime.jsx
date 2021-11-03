import React from 'react'
// * Style
import '../../styles/globals/Input.scss'

const InputTime = () => (
  <input className='Input' type='time' min='06:00' max='20:00' required />
)

export { InputTime }
