import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAxios } from '../../hooks/useAxios'
import { URL_USERS } from '../../utils/constants'
import { usersTitles } from '../../utils/tableHeaders'
import {
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Container,
  Button,
} from '../../components'

const Users = () => {
  const { getData, deleteData } = useAxios()
  const history = useHistory()
  const [users, setUsers] = useState()
  const [user, setUser] = useState({
    id_usuario: 0,
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_USERS)
      setUsers(data)
    })()
  }, [])

  const handleUserNavigation = (userType) => {
    history.push(`/users/add/${userType}`)
    console.log(userType)
  }

  const handleUserType = (id) => {
    switch (id) {
      case 1:
        return 'Admin'
      case 2:
        return 'Doctor'
      case 3:
        return 'Patient'
      default:
        return 'N/A'
    }
  }

  return (
    <>
      <Container>
        <section className='Container_menu-users'>
          <div className='Container_menu-dowload'>
            <Button modifier='download' name='Download'></Button>
          </div>
          <Button modifier='rol' name='Admin' handle={() => handleUserNavigation('admin')} />
          <Button modifier='rol' name='Doctor' handle={() => handleUserNavigation('doctor')} />
          <Button modifier='rol' name='Patient' handle={() => handleUserNavigation('patient')} />
        </section>
        <Table>
          <TableHeader titles={usersTitles} />
          <TableContent>
            {users?.map((item) => (
              <TableItem
                key={`room--${item.id_usuario}`}
                // handleEdit={toggleModal}
                handleDelete={deleteData}
                data={item}
                id={item.id_usuario}
              >
                <TableData data={item.id_usuario} />
                <TableData data={item.numero_documento} />
                <TableData data={handleUserType(item.id_perfil)} />
                <TableData data={item.nombre_usuario} />
                <TableData data={item.correo} />
                <TableData data={item.telefono} />
                <TableData data={item.sexo} />
              </TableItem>
            ))}
          </TableContent>
        </Table>
      </Container>
    </>
  )
}

export { Users }
