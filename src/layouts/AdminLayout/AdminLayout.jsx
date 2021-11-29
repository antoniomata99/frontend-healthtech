import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/components/Layout.scss'
// * Components
import { Header, Menu } from '../../components'

const AdminLayout = ({ children }) => {
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

AdminLayout.defaultProps = {
  children: null,
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AdminLayout }
