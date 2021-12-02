import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Layout.scss'
import { Header, Menu } from '../../components'

const DoctorLayout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header userType='Doctor' />
      <div className='Layout__Container'>
        <Menu />
        <main className='Layout__Content Layout__Content--Doctor'>{children}</main>
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
