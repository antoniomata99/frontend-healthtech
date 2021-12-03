import React, { useContext, useEffect, useState } from 'react'
import '../../styles/components/Patient.scss'
import { UserContext } from '../../context/UserContext'
import { useAxios } from '../../hooks/useAxios'
import { URL_PATIENT_APPOINTMENTS, URL_PATIENT_ID } from '../../utils/constants'
import { PatientLayout } from '../../layouts'
import { PatientAppointmentForm } from '../../forms'
import { Container, InfoCard, Message } from '../../components'

const Patient = () => {
  const [appointments, setAppointments] = useState([])
  const [patientID, setPatientID] = useState([])
  const { postData, setIsUpdate, message, error, setMessage } = useAxios()
  const { userEmail } = useContext(UserContext)

  useEffect(() => {
    ;(async () => {
      const data = await postData(
        {
          // username: userEmail,
          username: 'fernan@gmail.com',
        },
        URL_PATIENT_APPOINTMENTS
      )
      setAppointments(data)
      const patientIdData = await postData(
        {
          // username: userEmail,
          username: 'patient@patient',
        },
        URL_PATIENT_ID
      )
      // setPatientID(patientIdData.id_usuario)
    })()
  }, [setIsUpdate])

  return (
    <PatientLayout>
      {error && (
        <Message modifier='error' text={`Error: ${message}`} state={true} setMessage={setMessage} />
      )}
      {!error && message.length > 3 && (
        <Message
          modifier='good'
          text={`Success: ${message}`}
          state={true}
          setMessage={setMessage}
        />
      )}
      <Container>
        <PatientAppointmentForm postData={postData} user_id={patientID} />
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
