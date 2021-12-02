import React, {useEffect, useState} from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { doctorListsTitles } from '../../utils/tableHeaders'
import { AiOutlineClose } from 'react-icons/ai'
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Modal,
  Button,
  DoctorListForm,
  Message,
} from '../../components'
import { URL_DOCTOR_LIST } from '../../utils/constants'

const DoctorList = () => {
  const { handleModal, openModal } = useModal()
  const {postData, updateData, error, message, isUpdate, setIsUpdate} = useAxios()
  const [listDoctors, setListDoctors] = useState([])
  const [listDoctor, setListDoctor] = useState({
    username: '',
    id_agenda: '',
    id_usuario: '',
    id_horario: '',
    fecha: '',
    id_cita: '',
    estado: '',
    hora_inicio: '',
    hora_fin: ''
  })

  useEffect( () => {
    ;(async ()  => {
      const data = await postData({
        "username": "evilsatan@gmail.com"
      },URL_DOCTOR_LIST)
      setListDoctors(data)
      setIsUpdate(false)
    })()
  },[isUpdate])

  const toggleModal = (data) => {
    handleModal()
    setListDoctor({
      id_cita: data.id_cita,
      fecha: data.fecha,
      estado: data.estado,
      id_agenda: data.id_agenda,
      id_usuario: data.id_usuario,
      id_horario: data.id_horario
    })
  }

  return (
      <>
        {error && <Message modifier='error' text={`Error: ${message}`} state={true} />}
        {!error && message.length > 3 && (
          <Message modifier='good' text={`Success: ${message}`} state={true} />
        )}
          {<Message modifier='error' text={`Error: ${message}`} />}
          <Container>
            <Table>
              <TableHeader titles={doctorListsTitles} />
              <TableContent>
                {listDoctors?.map((item) => (
                  <TableItem
                    key={`listDoctors--${item.id_cita}`}
                    data={item}
                    handleEdit={toggleModal}
                    remove={false}
                  >
                    <TableData data={item.id_cita}/>
                    <TableData data={item.username}/>
                    <TableData data={item.fecha} />
                    <TableData data={item.hora_inicio} />
                    <TableData data={item.hora_fin}/>
                    <TableData data={item.estado}/>
                  </TableItem>
                ))}
              </TableContent>
            </Table>
          </Container>
          {openModal && (
            <Modal>
              <Button modifier='close' className='Modal__Button' handle={handleModal}>
                <AiOutlineClose />
              </Button>
              <DoctorListForm
                idCita={listDoctor.id_cita}
                itemFecha={listDoctor.fecha}
                itemEstado={listDoctor.estado}
                idAgenda={listDoctor.id_agenda}
                idUsuario={listDoctor.id_usuario}
                idHorario={listDoctor.id_horario}
                update={true}
                updateData={updateData}
                handleModal={handleModal}
              />
            </Modal>
          )}
      </>
  )
}

export { DoctorList }