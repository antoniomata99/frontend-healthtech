import React, { useEffect, useState } from 'react'
import '../../styles/components/InfoCard.scss'
import { isDateBeforeToday } from '../../utils/calculateDate'

const InfoCard = ({ date, consultingRoom, initialSchedule, finishedSchedule }) => {
  const [isInactive, setInactive] = useState(true)

  useEffect(() => {
    ;(async () => {
      setInactive(isDateBeforeToday(date))
    })()
  })

  return (
    <article className={`InfoCard ${!!isInactive ? 'InfoCard--inactive' : ''}`}>
      <h1 className='InfoCard__Title'>Date: {date}</h1>
      <h5 className='InfoCard__Text'>
        Schedule: {initialSchedule} - {finishedSchedule}
      </h5>
      <h3 className='InfoCard__Subtitle'>{consultingRoom}</h3>
    </article>
  )
}

export { InfoCard }
