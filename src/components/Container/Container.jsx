import React from 'react'
// * Style
import '../../styles/globals/Container.scss'
// * Components
import { BackArrow } from '../'

const Container = ({ children, button, linkText }) => {
  return (
    <section className='Container'>
      {children}
      {!!button && <BackArrow link={linkText} />}
    </section>
  )
}

export { Container }
