import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// * Style
import '../../styles/globals/BannerLink.scss'

const BannerLink = ({ link, modifier, text }) => {
  return (
    <Link to={link} className={`BannerLink BannerLink--${modifier}`}>
      <h1 className='BannerLink__Text'>{text}</h1>
    </Link>
  )
}

BannerLink.defaultProps = {
  modifier: '',
  text: 'Banner test',
  link: '/',
}

BannerLink.propTypes = {
  modifier: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export { BannerLink }
