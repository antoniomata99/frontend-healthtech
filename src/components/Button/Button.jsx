import React from 'react'
// * Style
import '../../styles/globals/Button.scss'

const Button = ({ name, modifier, children }) => {
  return (
    <button className={`Button Button--${modifier}`}>
      {name && <span>{name}</span>}
      {children}
    </button>
  )
}

export { Button }
