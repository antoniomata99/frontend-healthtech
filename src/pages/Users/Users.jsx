import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAxios } from '../../hooks/useAxios'
import { URL_USERS, URL_ADMIN, URL_DOCTORS, URL_PATIENT } from '../../utils/constants'
import { usersTitles } from '../../utils/tableHeaders'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../../styles/globals/Users.scss'
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
  const { getData, deleteData, isUpdate, setIsUpdate } = useAxios()
  const history = useHistory()
  const [users, setUsers] = useState()
  const [user, setUser] = useState({
    id_usuario: 0,
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_USERS)
      setUsers(data)
      setIsUpdate(false)
    })()
  }, [isUpdate])

  const handleUserNavigation = (userType) => {
    history.push(`/users/add/${userType}`)
  }

  const handleUserType = (id) => {
    switch (id) {
      case 1:
        return 'Admin'
      case 2:
        return 'Patient'
      case 3:
        return 'Doctor'
      default:
        return 'N/A'
    }
  }

  const handleDelete = (id) => {
    const userType = handleUserType(id)
    const userTypeUrl =
      userType === 'Admin' ? URL_ADMIN : userType === 'Doctor' ? URL_DOCTORS : URL_PATIENT
    deleteData(id, userTypeUrl)
  }

  const handleEdit = (data) => {
    history.push(
      `/users/edit/${handleUserType(data.id_perfil).toLocaleLowerCase()}/${data.id_usuario}`
    )
  }

  return (
    <>
      <Container>
        <section className='Users_Menu'>
          <div className='Users_Button Users_Button--download'>
            <Button modifier='download' name='Download'>
              <AiOutlineCloudDownload />
            </Button>
          </div>
          <div className='Users_Buttons-container '>
            <Button modifier='add' name='Admin' handle={() => handleUserNavigation('admin')} />
            <Button modifier='add' name='Doctor' handle={() => handleUserNavigation('doctor')} />
            <Button modifier='add' name='Patient' handle={() => handleUserNavigation('patient')} />
          </div>
        </section>
        <Table>
          <TableHeader titles={usersTitles} />
          <TableContent>
            {users?.map((item) => (
              <TableItem
                key={`Users--${item.id_usuario}--${item.id_perfil}`}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                data={item}
                id={item.id_perfil}
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
