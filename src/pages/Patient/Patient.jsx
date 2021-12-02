import React, { useEffect, useState } from 'react'
import '../../styles/components/Patient.scss'
import { useAxios } from '../../hooks/useAxios'
import { URL_PATIENT_APPOINTMENTS } from '../../utils/constants'
import { PatientLayout } from '../../layouts'
import { PatientAppointmentForm } from '../../forms'
import { Container, InfoCard, Message } from '../../components'

const Patient = () => {
  const [appointments, setAppointments] = useState([])
  const { postData, setIsUpdate, message, error } = useAxios()

  useEffect(() => {
    ;(async () => {
      const data = await postData(
        {
          username: 'fernan@gmail.com',
        },
        URL_PATIENT_APPOINTMENTS
      )
      setAppointments(data)
    })()
  }, [setIsUpdate])

  return (
    <PatientLayout>
      {error && <Message modifier='error' text={`Error: ${message}`} state={true} />}
      {!error && message.length > 3 && (
        <Message modifier='good' text={`Success: ${message}`} state={true} />
      )}
      <Container>
        <PatientAppointmentForm postData={postData} />
        <h6 className='Appointment__Title--Warning'>
          * Please select the date and the doctor, before continuing with the schedule.
        </h6>
        <h1 className='Appointment__Title'>My Appointments</h1>
        <section className='Appointment__List'>
          {appointments?.map((appointment, index) => (
            <InfoCard
              key={`Appointment--${index}`}
              date={appointment.fecha}
              consultingRoom={appointment.nombre}
              initialSchedule={appointment.hora_inicio}
              finishedSchedule={appointment.hora_fin}
            />
          ))}
        </section>
      </Container>
    </PatientLayout>
  )
}

export { Patient }
