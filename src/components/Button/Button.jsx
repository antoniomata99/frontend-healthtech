import React from 'react'
import PropTypes from 'prop-types'
import '@styles/globals/Button.scss'

const Button = ({ name, modifier, children, handle }) => {
  return (
    <button
      type='submit'
      className={`Button Button--${modifier}`}
      onClick={handle ? () => handle() : null}
    >
      {name && <span>{name}</span>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  name: '',
  modifier: '',
  handle: null,
  children: null,
}

Button.propTypes = {
  name: PropTypes.string,
  modifier: PropTypes.string,
  handle: PropTypes.func,
  children: PropTypes.node,
}

export { Button }
