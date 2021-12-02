import React, { useEffect, useState } from 'react'
import { useAxios } from '@hooks/useAxios'
import { DropDown, Form, InputText } from '@components'
import { URL_APPOINTMENTS, URL_AGENDAS, URL_APPOINTMENT_SCHEDULE } from '@utils/constants'

const PatientAppointmentForm = ({ user_id, postData }) => {
  const { getData } = useAxios()
  const [date, setDate] = useState('')
  const [agendas, setAgendas] = useState([])
  const [agenda, setAgenda] = useState([])
  const [schedules, setSchedules] = useState([])
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    ;(async () => {
      const agendaData = await getData(URL_AGENDAS)
      const scheduleData = await getData(URL_APPOINTMENT_SCHEDULE)
      const agendaElements = []
      const scheduleElements = []
      // * Set Agendas
      agendaData?.map(async (agenda) => {
        await agendaElements.push({
          id: agenda.id_agenda,
          value: agenda.id_agenda,
        })
      })
      // * Set Schedules
      scheduleData?.map(async (schedule) => {
        await scheduleElements.push({
          id: schedule.id_horario,
          value: `${schedule.hora_inicio} - ${schedule.hora_fin}`,
        })
      })
      setAgendas(agendaElements)
      setSchedules(scheduleElements)
    })()
  }, [])

  const handlePost = (e) => {
    e.preventDefault()
    const dateSelected = new Date(date)
    if (dateSelected.getTime() < new Date().getTime()) {
      // * Check if date is less than current date
      console.error('Current date is less than selected date')
    } else {
      postData(
        { fecha: date, id_agenda: agenda, id_usuario: user_id, id_horario: schedule },
        URL_APPOINTMENTS
      )
    }
  }

  return (
    <Form title='New Appointment' handleData={handlePost}>
      <InputText placeholder='Date' type='date' defaultValue={date} setData={setDate} />
      <DropDown defaultOption='Id Agenda' options={agendas} setData={setAgenda} />
      <DropDown defaultOption='Horario' options={schedules} setData={setSchedule} />
    </Form>
  )
}

export { PatientAppointmentForm }
