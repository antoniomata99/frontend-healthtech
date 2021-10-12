import React from 'react'
import './Button.scss'

const Button = ({ name, modifier, children }) => {
  return (
    <button className={`Button Button--${modifier}`}>
      <span>{name}</span>
      {children}
    </button>
  )
}

export { Button }
