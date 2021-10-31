import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Components
import {
  Form,
  DropDown,
  Container,
  InputText,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
} from '../../components'

const titles = ['ID', 'Name', 'Description', 'State']

const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]

const Specialty = () => {
  const { data: specialties, getData } = useAxios('especialidad/')

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container button='true' linkText='/doctor'>
      <Form title='Add Speciality'>
        <InputText placeholder='Name: Urology' />
        <InputText placeholder='Description...' />
        <DropDown defaultOption='active' options={activeElements} />
      </Form>
      <Table>
        <TableHeader titles={titles} />
        <TableContent>
          {specialties.map((item) => (
            <TableItem key={`specialty--${item.id_especialidad}`}>
              <TableData data={item.id_especialidad} />
              <TableData data={item.descripcion} />
              <TableData data={item.estado} />
            </TableItem>
          ))}
        </TableContent>
      </Table>
    </Container>
  )
}

export { Specialty }
