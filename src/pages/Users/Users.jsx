import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
// * Components
import {
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Container,
  Modal,
  Button,
} from '../../components'

const titles = ['ID', 'Document','Rol', 'User', 'email', 'Phone', 'Gender']

const Users = () => {
  const {
    openModal,
    handleModal,
    data: users,
    deleteData,
  } = useAxios('usuarios/')
  
  
const toggleModal = (data) => {
  handleModal()
  setUser({
    id_horario_medico: data.id_horario_medico,
    hora_inicio: data.hora_inicio,
    hora_fin: data.hora_fin,
  })
}

  
  const [user, setUser] = useState({
    id_usuario: 0,

  })

  let history = useHistory()

  function addAdmin() {
    history.push('/users/add/admin')
  }

  function addDoctor() {
    history.push('/users/add/doctor')
  }

  function addpatient() {
    history.push('/users/add/patient')
  }


  return (
    <>
      <Container>
        <section className='Container_menu-users'>
          <div className='Container_menu-dowload'>
            <Button modifier='dowload' name='Dowload'></Button>
          </div>
          <Button modifier='rol' name='Admin' handle={addAdmin}></Button>
          <Button modifier='rol' name='Doctor' handle={addDoctor}></Button>
          <Button modifier='rol' name='Patient' handle={addpatient}></Button>
        </section>

        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {users.map((item) => (
              <TableItem
                key={`room--${item.id_usuario}`}
                // handleEdit={toggleModal}
                handleDelete={deleteData}
                data={item}
                id={item.id_usuario}
              >
                <TableData data={item.id_usuario} />
                <TableData data={item.numero_documento} />
                <TableData data={item.id_perfil} />
                <TableData data={item.nombre_usuario} />
                <TableData data={item.correo} />
                <TableData data={item.telefono} />
                <TableData data={item.sexo} />

              </TableItem>
            ))}
          </TableContent>
        </Table>
      </Container>
      {openModal && (
        <Modal>
          <Button modifier='close' className='Modal__Button' handle={handleModal}>
            <AiOutlineClose />
          </Button>
        </Modal>
      )}
    </>
  )
}

export { Users }
