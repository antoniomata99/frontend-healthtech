import React from 'react'
// * Styles
import '../../styles/components/UserAdd.scss'
// * Components
import { Container, Form, InputText, DropDown } from '../../components'

const rhOptions = [
  { id: 1, value: 'O+' },
  { id: 2, value: 'A+' },
  { id: 3, value: 'B+' },
  { id: 4, value: 'AB+' },
  { id: 5, value: 'O-' },
  { id: 6, value: 'A-' },
  { id: 7, value: 'B-' },
  { id: 8, value: 'AB-' },
]
const documentTypeOptions = [
  { id: 1, value: 'CC' },
  { id: 2, value: 'TI' },
  { id: 3, value: 'CE' },
]

const UserAdd = () => {
  // TODO: Obtain url parameter for render doctor options
  const isDoctor = false
  return (
    <Container button={true}>
      <Form title='Add Doctor'>
        <InputText placeholder='First Name' />
        <InputText placeholder='Second Name' />
        <InputText placeholder='Last Name' />
        <InputText placeholder='Last Name 2 (optional)' />
        <DropDown defaultOption='RH' options={rhOptions} />
        <InputText placeholder='Mail' type='email' />
        <DropDown defaultOption='Document type' options={documentTypeOptions} />
        <InputText placeholder='Document Number' type='number' />
        <InputText placeholder='Address' />
        <InputText placeholder='Phone Number' type='number' />
        <InputText placeholder='Phone Number 2 (optional)' type='number' />
        {isDoctor && (
          <div className='UserAdd__Additional-section'>
            <h4 className='UserAdd__Section-Title'>Additional Information</h4>
            <DropDown defaultOption='Specialty' />
            <DropDown defaultOption='Consulting room' />
            <DropDown defaultOption='Schedule' />
          </div>
        )}
        <div className='UserAdd__Additional-section'>
          <h4 className='UserAdd__Section-Title'>Security</h4>
          <InputText placeholder='Password' type='password' />
          <InputText placeholder='Repeat password' type='password' />
        </div>
      </Form>
    </Container>
  )
}

export { UserAdd }
