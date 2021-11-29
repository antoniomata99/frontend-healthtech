import React from 'react'
import { DropDown, Form, InputText } from '../../components'

const PatientAppointmentForm = () => {
  return (
    <Form
      title='New Appointment'
      // handleData={}
    >
      <InputText placeholder='Date' type='date' />
      <DropDown defaultOption='Id Agenda' />
      <DropDown defaultOption='Id Horario' />
    </Form>
  )
}

export { PatientAppointmentForm }
