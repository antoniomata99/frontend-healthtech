import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
// * Components
import {
  Form,
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  InputTime,
  Modal,
  Button,
} from '../../components'

const titles = ['ID', 'Start time', 'End time']

const ScheduleForm = () => {
  return (
    <Form title='Add Schedule'>
      <InputTime />
      <InputTime />
    </Form>
  )
}

const Schedule = () => {
  const { data: schedules, getData } = useAxios('horarioMedico/')

  useEffect(() => {
    getData()
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Container button='true' linkText='/doctor'>
        <ScheduleForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {schedules.map((item) => (
              <TableItem
                key={`schedule--${item.id_horario_medico}`}
                handleModal={handleModal}
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
          <Button
            modifier='close'
            className='Modal__Button'
            handle={handleModal}
          >
            <AiOutlineClose />
          </Button>
          <ScheduleForm />
        </Modal>
      )}
    </>
  )
}

export { Schedule }
