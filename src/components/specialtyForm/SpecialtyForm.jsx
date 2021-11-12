import React, { useState } from 'react'
// * Components
import { DropDown, Form, InputText } from '..'

const activeElements = [
  { id: 1, value: 'activo' },
  { id: 2, value: 'inactivo' },
]

const SpecialtyForm = ({
  postData,
  itemName,
  itemDescription,
  itemState,
  id,
  update,
  handleModal,
  updateData,
}) => {
  const [name, setName] = useState(itemName)
  const [description, setDescription] = useState(itemDescription)
  const [state, setState] = useState(itemState)

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

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData({
      id_especialidad: id,
    })
    handleModal()
  }

  return (
    <Form
      title={update ? '' : 'Add Specialty'}
      handleData={update ? handleUpdate : handlePostData}
      isUpdate={update ? true : false}
    >
      {id && <h1 className='Identifier'>{id}</h1>}
      <InputText placeholder='Name: Urology' setData={setName} defaultValue={name} />
      <InputText placeholder='Description...' setData={setDescription} defaultValue={description} />
      <DropDown defaultOption='Select' options={activeElements} setData={setState} />
    </Form>
  )
}

export { SpecialtyForm }
