import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { DropDown, Form, InputText } from '../../components'
import { URL_APPOINTMENTS, URL_DOCTORS_LIST, URL_DOCTOR_SCHEDULES } from '../../utils/constants'

const PatientAppointmentForm = ({ user_id, postData }) => {
  const { getData } = useAxios()
  const [date, setDate] = useState('')
  const [doctors, setDoctors] = useState([])
  const [doctorAgenda, setDoctorAgenda] = useState()
  const [schedules, setSchedules] = useState([])
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    ;(async () => {
      const doctorsList = await getData(URL_DOCTORS_LIST)
      const doctorsElements = []
      // * Set Doctors List
      doctorsList?.map(async (doctor) => {
        await doctorsElements.push({
          id: doctor.id_agenda,
          value: doctor.username,
        })
      })
      setDoctors(doctorsElements)
    })()
  }, [])

  const handleDoctorChange = async (id) => {
    setSchedules([])
    if (date) {
      setDoctorAgenda(id)
      const scheduleData = await postData(
        { id_agenda: doctorAgenda, fecha: date },
        URL_DOCTOR_SCHEDULES
      )
      const scheduleElements = []
      // * Set Schedules
      scheduleData?.map(async (schedule) => {
        await scheduleElements.push({
          id: schedule.id_horario,
          value: `${schedule.hora_inicio} - ${schedule.hora_fin}`,
        })
      })
      setSchedules(scheduleElements)
    } else {
      alert('No se ha seleccionado una fecha')
    }
  }

  const handlePost = (e) => {
    e.preventDefault()
    const dateSelected = new Date(date)
    if (dateSelected.getTime() < new Date().getTime()) {
      // * Check if date is less than current date
      alert('Current date is less than selected date')
    } else {
      postData(
        {
          fecha: date,
          id_agenda: doctorAgenda,
          id_usuario: user_id,
          id_horario: schedule,
          estado: 'pendiente',
        },
        URL_APPOINTMENTS
      )
    }
  }

  return (
    <Form title='New Appointment' handleData={handlePost}>
      <InputText placeholder='Date' type='date' defaultValue={date} setData={setDate} />
      <DropDown defaultOption='Doctor' options={doctors} setData={handleDoctorChange} />
      {schedules.length > 0 && (
        <DropDown defaultOption='Doctor Schedule' options={schedules} setData={setSchedule} />
      )}
    </Form>
  )
}

export { PatientAppointmentForm }
