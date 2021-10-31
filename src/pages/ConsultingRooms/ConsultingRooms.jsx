import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
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
} from '../../components'

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

const ConsultingRooms = () => {
  const { data: rooms, getData } = useAxios('consultorio/')

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Form title='Add consulting room'>
        <InputText placeholder={'Name: Room 001'} />
        <InputText placeholder={'Code: Room--001'} />
        <DropDown defaultOption='active' options={activeElements} />
        <DropDown defaultOption='floor' options={floorElements} />
      </Form>
      <Table>
        <TableHeader titles={titles} />
        <TableContent>
          {rooms.map((item) => (
            <TableItem key={`room--${item.id_consultorio}`}>
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
  )
}

export { ConsultingRooms }
