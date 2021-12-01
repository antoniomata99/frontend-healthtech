import React, { useEffect, useState } from 'react'
import '@styles/components/Patient.scss'
import { useAxios } from '@hooks/useAxios'
import { URL_PATIENT_APPOINTMENTS } from '@utils/constants'
import { PatientLayout } from '@layouts'
import { PatientAppointmentForm } from '@forms'
import { Container, InfoCard } from '@components'

const Patient = () => {
  const [appointments, setAppointments] = useState([])
  const { getData, postData, setIsUpdate } = useAxios()

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_PATIENT_APPOINTMENTS, {
        headers: {
          username: 'fernan@gmail.com',
        },
      })
      console.log(data)
      setAppointments(data)
    })()
  }, [setIsUpdate])

  return (
    <PatientLayout>
      <Container>
        <PatientAppointmentForm postData={postData} />
        <h1 className='Appointment__Title'>My Appointments</h1>
        <section className='Appointment__List'>
          {appointments?.map((appointment) => (
            <InfoCard
              key={appointment.id_cita}
              date={appointment.fecha}
              id_agenda={appointment.id_agenda}
              id_horario={appointment.id_horario}
            />
          ))}
        </section>
      </Container>
    </PatientLayout>
  )
}

export { Patient }
