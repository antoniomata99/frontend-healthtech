import React, { useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useSpecialty } from '../../hooks/useSpecialty'

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
import { useModal } from '../../hooks/useModal'

// TODO: Need info from the API
const titles = ['ID', 'Name', 'Description', 'State']
const activeElements = [
  { id: 1, value: 'activo' },
  { id: 2, value: 'inactivo' },
]




const Specialty = () => {
  //const { data: specialties, getData } = useAxios('especialidad/')
  //const { openModal, handleModal } = useModal()
  const { openModal, handleModal, data: specialties } = useSpecialty('especialidad/')
  
  const [specialty, setSpecialty] = useState('')

  return (
    <>
      <Container button='true' linkText='/doctor'>
        <SpecialtyForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {specialties.map((item) => (
              <TableItem key={`specialty--${item.id_especialidad}`} handleModal={handleModal} remove={false}>
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

const SpecialtyForm = () => {

  const [specialty, setSpecialty] = useState('')
  const [description, setDescription] = useState('')
  const [state, setState] = useState('')

  const { postData } = useAxios('especialidad/')

  const handlePostData = (e) =>{
    e.preventDefault()

    const data = {

      "descripcion": description,
      "nombre": specialty,
      "estado": state

    }
    postData(data)
  }

  return (
    <Form title='Add Speciality' handleData={(e) => handlePostData(e)}>
      <InputText placeholder='Name: Urology' setData={setSpecialty} />
      <InputText placeholder='Description...' setData={setDescription}/>
      <DropDown defaultOption='active' options={activeElements} setData={setState} />
    </Form>
  )
}

export { Specialty }
