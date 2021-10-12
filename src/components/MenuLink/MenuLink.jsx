import React from 'react'
import { Link } from 'react-router-dom'
// * Styles
import './MenuLink.scss'

const MenuLink = ({ link, Icon, text }) => {
  return (
    <li className='MenuLink'>
      <Link className='MenuLink__link' to={link}>
        <Icon />
        <h4 className='MenuLink__text'>{text}</h4>
      </Link>
    </li>
  )
}

export { MenuLink }
