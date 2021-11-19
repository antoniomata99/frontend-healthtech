import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
// * Components
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Modal,
  Button,
  ScheduleForm,
} from '../../components'

// TODO: Need info from the API
const titles = ['ID', 'Start time', 'End time']

const Schappointment = () => {
  const {
    openModal,
    handleModal,
    data: Schappointments,
    postData,
    updateData,
    deleteData,
  } = useAxios('horario/')
  const [Schappointment, setSchappointment] = useState({
    id_horario: 0,
    hora_inicio: '',
    hora_fin: '',
  })

  const toggleModal = (data) => {
    handleModal()
    setSchappointment({
      id_horario: data.id_horario,
      hora_inicio: data.hora_inicio,
      hora_fin: data.hora_fin,
    })
  }

  return (
    <>
      <Container button={true} linkText='/doctor'>
        <ScheduleForm postData={postData} update={false} />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {Schappointments.map((item) => (
              <TableItem
                key={`Schappointment--${item.id_horario}`}
                handleEdit={toggleModal}
                handleDelete={deleteData}
                data={item}
              >
                <TableData data={item.id_horario} />
                <TableData data={item.hora_inicio} />
                <TableData data={item.hora_fin} />
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
          <ScheduleForm
            updateData={updateData}
            id={Schappointment.id_horario}
            initialTime={Schappointment.hora_inicio}
            finishTime={Schappointment.hora_fin}
            handleModal={handleModal}
            update={true}
          />
        </Modal>
      )}
    </>
  )
}

export { Schappointment }
