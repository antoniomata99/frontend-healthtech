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
  ConsultingRoomsForm,
} from '../../components'

const titles = ['ID', 'Name', 'Code', 'Floor', 'State']

const ConsultingRooms = () => {
  const {
    openModal,
    handleModal,
    data: rooms,
    postData,
    updateData,
    deleteData,
  } = useAxios('consultorio/')
  const [consultingRooms, setConsultingRooms] = useState({
    id_consultorio: 0,
    nombre: '',
    codigo: '',
    piso: '',
    estado: '',
  })

  const toggleModal = (data) => {
    handleModal()
    setConsultingRooms({
      id_consultorio: data.id_consultorio,
      nombre: data.nombre,
      codigo: data.codigo,
      piso: data.piso,
      estado: data.estado,
    })
  }

  return (
    <>
      <Container>
        <ConsultingRoomsForm postData={postData}/>
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {rooms.map((item) => (
              <TableItem
              key={`room--${item.id_consultorio}`}
              handleEdit={toggleModal}
              handleDelete={deleteData}
              data={item}
              id={item.id_consultorio}
              >
                <TableData data={item.id_consultorio} />
                <TableData data={item.nombre} />
                <TableData data={item.codigo} />
                <TableData data={item.piso} />
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
          <ConsultingRoomsForm 
            id={consultingRooms.id_consultorio}
            name={consultingRooms.nombre}
            code={consultingRooms.codigo}
            floor={consultingRooms.piso}
            state={consultingRooms.estado}
            update={true}
            updateData={updateData}
            handleModal={handleModal}
          />
        </Modal>
      )}
    </>
  )
}

ConsultingRooms.defaultProps = {}

ConsultingRooms.propTypes = {}

export { ConsultingRooms }
