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

const Schedule = () => {
  const {
    openModal,
    handleModal,
    data: schedules,
    postData,
    updateData,
    deleteData,
  } = useAxios('horarioMedico/')
  const [schedule, setSchedule] = useState({
    id_horario_medico: 0,
    hora_inicio: '',
    hora_fin: '',
  })

  const toggleModal = (data) => {
    handleModal()
    setSchedule({
      id_horario_medico: data.id_horario_medico,
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
            {schedules.map((item) => (
              <TableItem
                key={`schedule--${item.id_horario_medico}`}
                handleEdit={toggleModal}
                handleDelete={deleteData}
                data={item}
                id={item.id_horario_medico}
              >
                <TableData data={item.id_horario_medico} />
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
            id={schedule.id_horario_medico}
            initialTime={schedule.hora_inicio}
            finishTime={schedule.hora_fin}
            handleModal={handleModal}
            update={true}
          />
        </Modal>
      )}
    </>
  )
}

export { Schedule }
