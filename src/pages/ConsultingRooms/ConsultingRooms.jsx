import React, { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { roomsTitles } from '../../utils/tableHeaders'
import { URL_ROOMS } from '../../utils/constants'
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
  Message,
} from '../../components'

const ConsultingRooms = () => {
  const { handleModal, openModal } = useModal()
  const { data: rooms, postData, updateData, deleteData, error, message } = useAxios(URL_ROOMS)
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

  // TODO: Add loading state render

  return (
    <>
      {error && <Message modifier='error' text={`Error: ${message}`} state={true} />}
      {!error && message.length > 3 && (
        <Message modifier='good' text={`Success: ${message}`} state={true} />
      )}
      <Container>
        <ConsultingRoomsForm postData={postData} />
        <Table>
          <TableHeader titles={roomsTitles} />
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
            itemName={consultingRooms.nombre}
            itemCode={consultingRooms.codigo}
            itemFloor={consultingRooms.piso}
            itemState={consultingRooms.estado}
            update={true}
            updateData={updateData}
            handleModal={handleModal}
          />
        </Modal>
      )}
    </>
  )
}

export { ConsultingRooms }
