import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/components/Layout.scss'
// * Components
import { Header, Menu } from '../../components'

const DoctorLayout = ({ children }) => {
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

DoctorLayout.defaultProps = {
  children: null,
}

DoctorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { DoctorLayout }
