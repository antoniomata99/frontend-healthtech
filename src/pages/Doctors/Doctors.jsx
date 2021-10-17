import React from 'react'
import { Link } from 'react-router-dom'
// * Style
import './Doctors.scss'

const Doctors = () => {
  return (
    <div className='Doctors'>
      <Link to='#' className='Doctors__Link Doctors__Link--doctors'>
        <h1 className='Doctors__Text'>Doctors</h1>
      </Link>
      <Link to='/doctor/schedule' className='Doctors__Link Doctors__Link--schedule'>
        <h1 className='Doctors__Text'>Schedule</h1>
      </Link>
      <Link to='#' className='Doctors__Link Doctors__Link--specialty'>
        <h1 className='Doctors__Text'>Specialty</h1>
      </Link>
    </div>
  )
}

export { Doctors }
