import React from 'react'
import { Link } from 'react-router-dom'
// * Style
import '../../styles/globals/BannerLink.scss'

const BannerLink = ({ link, modifier, text }) => {
  return (
    <Link to={link} className={`BannerLink BannerLink--${modifier}`}>
      <h1 className='BannerLink__Text'>{text}</h1>
    </Link>
  )
}

export { BannerLink }
