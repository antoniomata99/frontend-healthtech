import React from 'react'
// * Styles
import './MenuLink.scss'

const MenuLink = ({ link, Icon, text }) => {
  return (
    <li className='MenuLink'>
      <a className='MenuLink__link' href={link}>
        <Icon />
        <h4 className='MenuLink__text'>{text}</h4>
      </a>
    </li>
  )
}

export { MenuLink }
