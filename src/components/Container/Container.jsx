import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/globals/Container.scss'
import { BackArrow } from '../../components'

const Container = ({ children, button, linkText }) => {
  return (
    <section className='Container'>
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
