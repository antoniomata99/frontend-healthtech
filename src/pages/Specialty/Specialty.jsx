import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
// * Icons
import { AiOutlineClose } from 'react-icons/ai'
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
  Modal,
  Button,
} from '../../components'
import { useState } from 'react'

const titles = ['ID', 'Name', 'Description', 'State']
const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]

const SpecialtyForm = () => {
  return (
    <Form title='Add Speciality'>
      <InputText placeholder='Name: Urology' />
      <InputText placeholder='Description...' />
      <DropDown defaultOption='active' options={activeElements} />
    </Form>
  )
}

const Specialty = () => {
  const { data: specialties, getData } = useAxios('especialidad/')

  useEffect(() => {
    getData()
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Container button='true' linkText='/doctor'>
        <SpecialtyForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {specialties.map((item) => (
              <TableItem
                key={`specialty--${item.id_especialidad}`}
                handleModal={handleModal}
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
          <Button
            modifier='close'
            className='Modal__Button'
            handle={handleModal}
          >
            <AiOutlineClose />
          </Button>
          <SpecialtyForm />
        </Modal>
      )}
    </>
  )
}

export { Specialty }
