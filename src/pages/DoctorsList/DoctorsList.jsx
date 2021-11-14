import React from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Components
import { Container, Table, TableHeader, TableContent, TableItem, TableData } from '../../components'

const titles = ['ID', 'Name', 'Mail', 'Phone', 'RH']

const DoctorsList = () => {
  const { data: doctors } = useAxios('medico/')

  return (
    <Container button={true} linkText='/doctor'>
      <Table>
        <TableHeader titles={titles} />
        <TableContent>
          {doctors.map((item) => (
            <TableItem key={`doctor--${item.id_usuario}`} edit={false} view={true} remove={false}>
              <TableData data={item.id_usuario} />
              <TableData data={item.nombre_usuario} />
              <TableData data={item.correo} />
              <TableData data={item.telefono} />
              <TableData data={item.grupo_sanguineo} />
            </TableItem>
          ))}
        </TableContent>
      </Table>
    </Container>
  )
}

export { DoctorsList }
