import React from 'react'
import { NavLink } from 'react-router-dom'
// * Styles
import '../../styles/components/MenuLink.scss'

const MenuLink = ({ link, Icon, text }) => {
  return (
    <li className='MenuLink'>
      <NavLink
        exact
        className='MenuLink__Link'
        activeClassName='MenuLink__Link--active'
        to={link}
      >
        <Icon />
        <h4 className='MenuLink__Text'>{text}</h4>
      </NavLink>
    </li>
  )
}

export { MenuLink }
