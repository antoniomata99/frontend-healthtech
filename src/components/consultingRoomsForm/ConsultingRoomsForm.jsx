import React from 'react'
import { floorElements, activeElements } from '../../utils/dropDownInfo'
import { DropDown, Form, InputText } from '..'

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
