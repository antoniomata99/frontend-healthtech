import React, { useEffect, useState } from 'react'
import '@styles/components/InfoCard.scss'
import { useAxios } from '@hooks/useAxios'
import { isDateBeforeToday } from '@utils/calculateDate'
import { URL_DOCTOR_SCHEDULE } from '@utils/constants'

const InfoCard = ({ date, id_agenda, id_horario }) => {
  const [isInactive, setInactive] = useState(true)
  const [schedule, setSchedule] = useState('')
  const { getData } = useAxios()

  useEffect(() => {
    ;(async () => {
      setInactive(isDateBeforeToday(date))
      const data = await getData(`${URL_DOCTOR_SCHEDULE}${id_horario}`) // TODO: Cors Origin Error tell backend to allow cors
      setSchedule(data)
    })()
  })

  return (
    <article className={`InfoCard ${!!isInactive ? 'InfoCard--inactive' : ''}`}>
      <h1 className='InfoCard__Title'>Date: {date}</h1>
      <h3 className='InfoCard__Subtitle'>ID Agenda: {id_agenda}</h3>
      <h5 className='InfoCard__Text'>Schedule: {schedule}</h5>
    </article>
  )
}

export { InfoCard }
