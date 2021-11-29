import React from 'react'
import '../../styles/components/InfoCard.scss'

const InfoCard = ({ isActive, specialty }) => {
  return (
    <article className={`InfoCard ${!isActive ? 'InfoCard--inactive' : ''}`}>
      <h1 className='InfoCard__Title'>Specialty</h1>
      <h3 className='InfoCard__Subtitle'>Consulting room</h3>
      <h5 className='InfoCard__Text'>Date</h5>
    </article>
  )
}

export { InfoCard }
