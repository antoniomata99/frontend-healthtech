import React from 'react'
import './ScheduleItem.scss'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri'

const ScheduleItem = ({ start, end }) => {
  return (
    <div className='ScheduleItem'>
      <h2 className='ScheduleItem__Data'>{start}</h2>
      <h2 className='ScheduleItem__Data'>{end}</h2>
      <div className='ScheduleItem__Buttons'>
        <button className='ScheduleItem__Button ScheduleItem__Button--edit'>
          <span>Edit</span>
          <RiEdit2Line />
        </button>
        <button className='ScheduleItem__Button ScheduleItem__Button--delete'>
          <span>Delete</span>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  )
}

export { ScheduleItem }
