import React from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/components/Doctor.scss'
// * Components
import { BannerLink } from '../../components'

const Doctor = () => {
  return (
    <div className='Doctor'>
      <BannerLink link='/doctor/list' text='All doctors' modifier='1' />
      <BannerLink link='/doctor/schedule' text='Schedule doctor' modifier='2' />
      <BannerLink link='/doctor/specialty' text='Specialty' modifier='3' />
      <BannerLink link='/doctor/Schappointment' text='Schedule appointment' modifier='4' />
    </div>
  )
}

Doctor.defaultProps = {}

Doctor.propTypes = {}

export { Doctor }
