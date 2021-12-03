import React from 'react'
import { Form } from '../../components'
import { URL_SET_STATE_DOCTOR_LIST } from '../../utils/constants'

const DoctorListForm = ({
  idCita,
  itemFecha,
  idAgenda,
  idUsuario,
  idHorario,
  update,
  updateData,
  handleModal,
}) => {
  const handleUpdate = (e) => {
    e.preventDefault()
    updateData(
      idCita,
      {
        fecha: itemFecha,
        estado: 'Cancelado',
        id_agenda: idAgenda,
        id_usuario: idUsuario,
        id_horario: idHorario,
      },
      URL_SET_STATE_DOCTOR_LIST
    )
    handleModal()
  }

  return (
    <Form
      title={update ? '' : 'Add Specialty'}
      handleData={update ? handleUpdate : ''}
      isUpdate={update ? true : false}
    >
      {idCita && <h1 className='Identifier'>{idCita}</h1>}
      <h3 className='Form__Info'>Are you sure to cancel this appointment ?</h3>
    </Form>
  )
}

export { DoctorListForm }
