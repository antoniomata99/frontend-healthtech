import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
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
  patientForm,
} from '../../components'

const titles = ['ID', 'Document', 'User', 'email', 'Phone', 'Gender']

const Users = () => {
  // const { data: admin, getData } = useAxios('admin/')
  const { data: doctor, getData } = useAxios('doctor/')
  const { data: patient, getDat } = useAxios('paciente/')

  const { openModal, handleModal } = useModal()

  useEffect(() => {
    getData()
  }, [])


  const users = patient.concat(doctor);
  
  return (
    <>
      <Container>
        <section className='Container_menu-users'>
          <div className='Container_menu-dowload'>
            <Button modifier='dowload' name='Dowload'></Button>
          </div>
          <Button modifier='rol' name='Admin'></Button>
          <Button modifier='rol' name='Doctor'></Button>
          <Button modifier='rol' name='Patient'></Button>
        </section>

        <patientForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {users.map((item) => (
              <TableItem key={`room--${item.id_usuario}`} handleModal={handleModal}>
                <TableData data={item.numero_documento} />
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
          <patientForm />
        </Modal>
      )}
    </>
  )
}

Users.defaultProps = {}

Users.propTypes = {}

export { Users }


// users/add/admin
// users/add/doctor
// users/add/patient

