import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Components
import { DropDown, Form, InputText } from '..'

const activeElements = [
  { id: 1, value: 'activo' },
  { id: 2, value: 'inactivo' },
]

const SpecialtyForm = ({ postData }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [state, setState] = useState('')

  const handlePostData = (e) => {
    e.preventDefault()
    postData({
      descripcion: description,
      nombre: name,
      estado: state,
    })
    setName('')
    setDescription('')
  }

  return (
    <Form title='Add Specialty' handleData={handlePostData}>
      <InputText placeholder='Name: Urology' setData={setName} defaultValue={name} />
      <InputText placeholder='Description...' setData={setDescription} defaultValue={description} />
      <DropDown defaultOption='Select' options={activeElements} setData={setState} />
    </Form>
  )
}

export { SpecialtyForm }
