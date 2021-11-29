import React from 'react'
import '../../styles/components/Patient.scss'
import { Container, InfoCard } from '../../components'
import { PatientAppointmentForm } from '../../forms'

const Patient = () => {
  return (
    <Container>
      <PatientAppointmentForm />
      <h1 className='Appointment__Title'>My Appointments</h1>
      <section className='Appointment__List'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    </Container>
  )
}

export { Patient }
