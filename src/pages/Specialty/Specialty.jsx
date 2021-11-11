import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
// * Components
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Modal,
  Button,
  SpecialtyForm,
} from '../../components'

// TODO: Need info from the API
const titles = ['ID', 'Name', 'Description', 'State']

const Specialty = () => {
  const { openModal, handleModal, data: specialties, postData } = useAxios('especialidad/')
  const [specialty, setSpecialty] = useState('')

  return (
    <>
      <Container button='true' linkText='/doctor'>
        <SpecialtyForm postData={postData} />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {specialties.map((item) => (
              <TableItem
                key={`specialty--${item.id_especialidad}`}
                handleModal={handleModal}
                remove={false}
              >
                <TableData data={item.id_especialidad} />
                <TableData data={item.nombre} />
                <TableData data={item.descripcion} />
                <TableData data={item.estado} />
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
          <SpecialtyForm />
        </Modal>
      )}
    </>
  )
}

export { Specialty }
