import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Layout.scss'
import { Header } from '../../components'

const PatientLayout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header userType='Patient' />
      <div className='Layout__Container'>
        <main className='Layout__Content Layout__Content--Patient'>{children}</main>
      </div>
    </div>
  )
}

PatientLayout.defaultProps = {
  children: null,
}

PatientLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { PatientLayout }
