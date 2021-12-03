import React, { useState } from 'react'
import { activeElements } from '../../utils/dropDownInfo'
import { URL_SPECIALTY } from '../../utils/constants'
import { DropDown, Form, InputText } from '../../components'

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
    postData(
      {
        descripcion: description,
        nombre: name,
        estado: state,
      },
      URL_SPECIALTY
    )
    setName('')
    setDescription('')
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData(
      id,
      {
        id_especialidad: id,
        descripcion: description,
        nombre: name,
        estado: state,
      },
      URL_SPECIALTY
    )
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
