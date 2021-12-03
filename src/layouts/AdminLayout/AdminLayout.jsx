import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Layout.scss'
import { Header, Menu } from '../../components'

const AdminLayout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header userType='Administrator' />
      <div className='Layout__Container'>
        <Menu />
        <main className='Layout__Content Layout__Content--Admin'>{children}</main>
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
