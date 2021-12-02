import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import '../../styles/globals/Button.scss'

const BackArrow = ({ link }) => {
  return (
    <Link to={link} className='Button Button--arrow-back'>
      <AiOutlineArrowLeft />
      <span>Back</span>
    </Link>
  )
}

BackArrow.defaultProps = {
  link: '/',
}

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
}

export { BackArrow }
