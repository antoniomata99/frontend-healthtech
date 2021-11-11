import React from 'react'
// * Components
import { DropDown, Form, InputText } from '..'

const activeElements = [
  { id: 1, value: 'Activo' },
  { id: 2, value: 'Inactivo' },
]
const floorElements = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 2, value: 3 },
  { id: 2, value: 4 },
]

const ConsultingRoomsForm = () => {
  return (
    <Form title='Add consulting room'>
      <InputText placeholder={'Name: Room 001'} />
      <InputText placeholder={'Code: Room--001'} />
      <DropDown defaultOption='active' options={activeElements} />
      <DropDown defaultOption='floor' options={floorElements} />
    </Form>
  )
}

export { ConsultingRoomsForm }
