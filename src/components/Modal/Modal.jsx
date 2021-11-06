import React from 'react'
import reactDom from 'react-dom'
// * Styles
import '../../styles/globals/Modal.scss'

const Modal = ({ children }) => {
  return reactDom.createPortal(
    <div className='Modal'>
      <div className='Modal__Container'>{children}</div>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }
