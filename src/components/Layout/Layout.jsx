import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/components/Layout.scss'
// * Components
import { Header, Menu } from '../'

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <div className='Layout__Container'>
        <Menu />
        <main className='Layout__Content'>{children}</main>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
