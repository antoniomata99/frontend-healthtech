import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Components
import { DropDown, Form, InputText } from '..'

const activeElements = [
  { id: 1, value: 'activo' },
  { id: 2, value: 'inactivo' },
]

const SpecialtyForm = () => {
  const [specialty, setSpecialty] = useState('')
  const [description, setDescription] = useState('')
  const [state, setState] = useState('')

  const { postData } = useAxios('especialidad/')

  const handlePostData = () => {
    const data = {
      descripcion: description,
      nombre: specialty,
      estado: state,
    }
    postData(data)
  }

  return (
    <Form title='Add Specialty' handleData={handlePostData}>
      <InputText placeholder='Name: Urology' setData={setSpecialty} />
      <InputText placeholder='Description...' setData={setDescription} />
      <DropDown defaultOption='Select' options={activeElements} setData={setState} />
    </Form>
  )
}

export { SpecialtyForm }
