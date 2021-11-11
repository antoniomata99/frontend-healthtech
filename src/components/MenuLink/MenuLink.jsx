import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/components/MenuLink.scss'

const MenuLink = ({ link, Icon, text }) => {
  return (
    <li className='MenuLink'>
      <NavLink exact className='MenuLink__Link' activeClassName='MenuLink__Link--active' to={link}>
        <Icon />
        <h4 className='MenuLink__Text'>{text}</h4>
      </NavLink>
    </li>
  )
}

MenuLink.defaultProps = {
  text: 'Menu Link test',
  link: '/',
  Icon: null,
}

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  Icon: PropTypes.element,
}

export { MenuLink }
