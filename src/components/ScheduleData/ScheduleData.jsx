import React from 'react'
import './ScheduleData.scss'
// * Components
import { ScheduleItem } from '../'

const ScheduleData = () => {
  return (
    <div className='ScheduleData'>
      <div className='ScheduleData__Header'>
        <h3 className='ScheduleData__Header-item'>Start Time</h3>
        <h3 className='ScheduleData__Header-item'>End Time</h3>
        <h3 className='ScheduleData__Header-item'>Actions</h3>
      </div>
      <div className='ScheduleData__Body'>
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </div>
    </div>
  )
}

export { ScheduleData }
