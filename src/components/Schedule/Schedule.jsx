import React from 'react'
import './Schedule.scss'
// * Components
import { ScheduleData } from '../'

const Schedule = () => {
  return (
    <section className='Schedule'>
      <div className='Schedule-Container'>
        <h4 className='Schedule-Container__Text'>Add Schedule</h4>
        <form action='' className='Schedule-Form'>
          <div className='Schedule-Form__Container'>
            <input className='Schedule-Form__Input Schedule-Form__Input--start' type='time' name='start' id='start-time' min='06:00' max='20:00' required />
            <input className='Schedule-Form__Input Schedule-Form__Input--end' type='time' name='end' id='end-time' min='06:00' max='20:00' required />
          </div>
          <button className='Schedule-Form__Button' type='submit'>
            Create Schedule
          </button>
        </form>
      </div>
      <div className='Schedule-Table'>
        <ScheduleData />
      </div>
    </section>
  )
}

export { Schedule }
