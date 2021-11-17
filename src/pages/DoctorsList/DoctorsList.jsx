import React from 'react'
import { useAxios } from '../../hooks/useAxios'
import { doctorListTitles } from '../../utils/tableHeaders'
import { URL_ALL_DOCTORS } from '../../utils/constants'
// * Components
import { Container, Table, TableHeader, TableContent, TableItem, TableData } from '../../components'

const DoctorsList = () => {
  const { data: doctors } = useAxios(URL_ALL_DOCTORS)

  return (
    <Container button={true} linkText='/doctor'>
      <Table>
        <TableHeader titles={doctorListTitles} />
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
