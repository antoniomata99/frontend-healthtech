import React from 'react'
import '../../../styles/components/Doctor.scss'
import { BannerLink } from '../../../components'
import { AdminLayout } from '../../../layouts'

const Doctor = () => {
  return (
    <AdminLayout>
      <div className='Doctor'>
        <BannerLink link='/admin/doctor/list' text='All doctors' modifier='1' />
        <BannerLink link='/admin/doctor/schedule' text='Schedule doctor' modifier='2' />
        <BannerLink link='/admin/doctor/specialty' text='Specialty' modifier='3' />
        <BannerLink
          link='/admin/doctor/schedule-appointments'
          text='Schedule appointment'
          modifier='4'
        />
      </div>
    </AdminLayout>
  )
}

export { Doctor }
