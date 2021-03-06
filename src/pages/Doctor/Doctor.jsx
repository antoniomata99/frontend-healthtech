import React from 'react'
import '../../styles/components/Doctor.scss'
import { BannerLink } from '../../components'

const Doctor = () => {
  return (
    <div className='Doctor'>
      <BannerLink link='/admin/doctor/list' text='All doctors' modifier='1' />
      <BannerLink link='/admin/doctor/schedule' text='Schedule' modifier='2' />
      <BannerLink link='/admin/doctor/specialty' text='Specialty' modifier='3' />
    </div>
  )
}

export { Doctor }
