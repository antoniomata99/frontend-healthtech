import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { specialtyTitles } from '../../utils/tableHeaders'
import { URL_SPECIALTY } from '../../utils/constants'
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
  Message,
} from '../../components'

const Specialty = () => {
  const { handleModal, openModal } = useModal()
  const { data: specialties, postData, updateData, error, message } = useAxios(URL_SPECIALTY)
  const [specialty, setSpecialty] = useState({
    id_especialidad: 0,
    nombre: '',
    descripcion: '',
    estado: '',
  })

  const toggleModal = (data) => {
    handleModal()
    setSpecialty({
      id_especialidad: data.id_especialidad,
      nombre: data.nombre,
      descripcion: data.descripcion,
      estado: data.estado,
    })
  }

  // TODO: Add loading state render

  return (
    <>
      {error && <Message modifier='error' text={`Error: ${message}`} state={true} />}
      {!error && message.length > 3 && (
        <Message modifier='good' text={`Success: ${message}`} state={true} />
      )}
      {<Message modifier='error' text={`Error: ${message}`} />}
      <Container button='true' linkText='/doctor'>
        <SpecialtyForm postData={postData} />
        <Table>
          <TableHeader titles={specialtyTitles} />
          <TableContent>
            {specialties.map((item) => (
              <TableItem
                key={`specialty--${item.id_especialidad}`}
                handleEdit={toggleModal}
                remove={false}
                data={item}
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
          <SpecialtyForm
            id={specialty.id_especialidad}
            itemName={specialty.nombre}
            itemDescription={specialty.descripcion}
            itemState={specialty.estado}
            update={true}
            updateData={updateData}
            handleModal={handleModal}
          />
        </Modal>
      )}
    </>
  )
}

export { Specialty }
