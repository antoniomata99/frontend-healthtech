import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { specialtyTitles } from '../../utils/tableHeaders'
import { URL_SPECIALTY } from '../../utils/constants'
import { AiOutlineClose } from 'react-icons/ai'
import { SpecialtyForm } from '../../forms'
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Modal,
  Button,
  Message,
} from '../../components'

const Specialty = () => {
  const { handleModal, openModal } = useModal()
  const { getData, postData, updateData, error, message, isUpdate, setIsUpdate } = useAxios()
  const [specialties, setSpecialties] = useState([])
  const [specialty, setSpecialty] = useState({
    id_especialidad: 0,
    nombre: '',
    descripcion: '',
    estado: '',
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_SPECIALTY)
      setSpecialties(data)
      setIsUpdate(false)
    })()
  }, [isUpdate])

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
            {specialties?.map((item) => (
              <TableItem
                key={`specialty--${item.id_especialidad}`}
                handleEdit={toggleModal}
                data={item}
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
