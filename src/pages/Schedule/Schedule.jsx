import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
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
} from '../../components'

const titles = ['ID', 'Start time', 'End time']

const Schedule = () => {
  const { data: schedules, getData } = useAxios('horarioMedico/')

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container button='true' linkText='/doctor'>
      <Form title='Add Schedule'>
        <InputTime />
        <InputTime />
      </Form>
      <Table>
        <TableHeader titles={titles} />
        <TableContent>
          {schedules.map((item) => (
            <TableItem key={`schedule--${item.id_horario_medico}`}>
              <TableData data={item.id_horario_medico} />
              <TableData data={item.hora_inicio} />
              <TableData data={item.hora_fin} />
            </TableItem>
          ))}
        </TableContent>
      </Table>
    </Container>
  )
}

export { Schedule }
