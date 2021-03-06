import React, { useState } from 'react'
import { activeElements, floorElements } from '../../utils/dropDownInfo'
import { URL_ROOMS } from '../../utils/constants'
import { DropDown, Form, InputText } from '../../components'

const ConsultingRoomsForm = ({
  id,
  postData,
  updateData,
  update,
  itemName,
  itemCode,
  itemState,
  itemFloor,
  handleModal,
}) => {
  const [name, setName] = useState(itemName)
  const [code, setCode] = useState(itemCode)
  const [state, setState] = useState(itemState)
  const [floor, setFloor] = useState(itemFloor)

  const handlePostData = (e) => {
    e.preventDefault()
    postData(
      {
        nombre: name,
        codigo: code,
        piso: floor,
        estado: state,
      },
      URL_ROOMS
    )
    setName('')
    setCode('')
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData(
      id,
      {
        id_consultorio: id,
        nombre: name,
        codigo: code,
        piso: floor,
        estado: state,
      },
      URL_ROOMS
    )
    handleModal()
  }

  return (
    <Form
      title={update ? '' : 'Add consulting room'}
      handleData={update ? handleUpdate : handlePostData}
      isUpdate={update ? true : false}
    >
      {id && <h1 className='Identifier'>{id}</h1>}
      <InputText placeholder='Name: Room 001' setData={setName} defaultValue={name} />
      <InputText placeholder='Code: Room--001' setData={setCode} defaultValue={code} />
      <DropDown defaultOption='Status' options={activeElements} setData={setState} />
      <DropDown defaultOption='Floor' options={floorElements} setData={setFloor} />
    </Form>
  )
}

export { ConsultingRoomsForm }
