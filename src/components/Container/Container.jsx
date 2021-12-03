import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/globals/Container.scss'
import { BackArrow } from '../../components'

const Container = ({ children, button, linkText, title }) => {
  return (
    <section className='Container'>
      <h1 className='Container__Title'>{title}</h1>
      {children}
      {!!button && <BackArrow link={linkText} />}
    </section>
  )
}

Container.defaultProps = {
  button: false,
  linkText: '/',
  children: null,
}

Container.propTypes = {
  button: PropTypes.bool,
  linkText: PropTypes.string,
  children: PropTypes.node,
}

export { Container }
