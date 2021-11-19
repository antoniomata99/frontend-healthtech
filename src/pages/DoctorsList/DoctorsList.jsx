import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { doctorListTitles } from '../../utils/tableHeaders'
import { URL_DOCTORS } from '../../utils/constants'
// * Components
import { Container, Table, TableHeader, TableContent, TableItem, TableData } from '../../components'

const DoctorsList = () => {
  const { getData } = useAxios()
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_DOCTORS)
      setDoctors(data)
    })()
  }, [])

  return (
    <Container button={true} linkText='/doctor'>
      <Table>
        <TableHeader titles={doctorListTitles} />
        <TableContent>
          {doctors?.map((item) => (
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
