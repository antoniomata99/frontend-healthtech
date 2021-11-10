import React from 'react'
// * Style
import '../../styles/globals/Button.scss'

const Button = ({ name, modifier, children, handle }) => {
  return (
    <button
      type="submit"
      className={`Button Button--${modifier}`}
      onClick={handle ? () => handle() : null}
    >
      {name && <span>{name}</span>}
      {children}
    </button>
  )
}

export { Button }
