import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
// * Components
import {
  Form,
  DropDown,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Container,
  InputText,
  Modal,
  Button,
} from '../../components'
import { useState } from 'react'

const titles = ['ID', 'Name', 'Code', 'Floor', 'State']

const activeElements = [
  { id: 1, value: 'Activo' },
  { id: 2, value: 'Inactivo' },
]
const floorElements = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 2, value: 3 },
  { id: 2, value: 4 },
]

const ConsultingRoomsForm = () => {
  return (
    <Form title='Add consulting room'>
      <InputText placeholder={'Name: Room 001'} />
      <InputText placeholder={'Code: Room--001'} />
      <DropDown defaultOption='active' options={activeElements} />
      <DropDown defaultOption='floor' options={floorElements} />
    </Form>
  )
}

const ConsultingRooms = () => {
  const { data: rooms, getData } = useAxios('consultorio/')

  useEffect(() => {
    getData()
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Container>
        <ConsultingRoomsForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {rooms.map((item) => (
              <TableItem
                key={`room--${item.id_consultorio}`}
                handleModal={handleModal}
              >
                <TableData data={item.id_consultorio} />
                <TableData data={item.nombre} />
                <TableData data={item.codigo} />
                <TableData data={item.piso} />
                <TableData data={item.estado} />
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
          <ConsultingRoomsForm />
        </Modal>
      )}
    </>
  )
}

export { ConsultingRooms }
