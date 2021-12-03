import React, { useEffect, useState } from 'react'
import '../../styles/components/Patient.scss'
import fileDownload from 'js-file-download'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { useAxios } from '../../hooks/useAxios'
import {
  URL_PATIENT_APPOINTMENTS,
  URL_PATIENT_ID,
  URL_CERTIFIED,
  USER_KEY,
} from '../../utils/constants'
import { PatientLayout } from '../../layouts'
import { PatientAppointmentForm } from '../../forms'
import { Button, Container, InfoCard, Message } from '../../components'

const Patient = () => {
  const [appointments, setAppointments] = useState([])
  const [patientID, setPatientID] = useState([])
  const { postData, setIsUpdate, message, error, setMessage } = useAxios()
  const userEmail = JSON.parse(localStorage.getItem(USER_KEY))

  useEffect(() => {
    ;(async () => {
      const data = await postData(
        {
          username: userEmail,
          // username: 'fernan@gmail.com',
        },
        URL_PATIENT_APPOINTMENTS
      )
      setAppointments(data)
      const patientIdData = await postData(
        {
          username: userEmail,
          // username: 'patient@patient',
        },
        URL_PATIENT_ID
      )
      setPatientID(patientIdData.id_usuario)
    })()
  }, [setIsUpdate])

  const handleDownload = async () => {
    const data = await postData(
      {
        username: userEmail,
        // username: 'paciente45@gmail.com',
      },
      URL_CERTIFIED
    )
    fileDownload(data, 'Certificado.pdf') // Download the PDF file
  }

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
        <Button modifier='download' name='Download' handle={handleDownload}>
          <AiOutlineCloudDownload />
        </Button>
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
