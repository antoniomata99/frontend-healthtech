import React from 'react'
import reactDom from 'react-dom'
import PropTypes from 'prop-types'
import '@styles/globals/Modal.scss'

const Modal = ({ children }) => {
  return reactDom.createPortal(
    <div className='Modal'>
      <div className='Modal__Container'>{children}</div>
    </div>,
    document.getElementById('modal')
  )
}

Modal.defaultProps = {
  children: <h1>Modal test</h1>,
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Modal }
