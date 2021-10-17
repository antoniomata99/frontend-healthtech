import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
// * Style
import './BackArrow.scss'

const BackArrow = ({ link }) => {
  return (
    <Link to={link} className='BackArrow'>
      <AiOutlineArrowLeft />
    </Link>
  )
}

export { BackArrow }
