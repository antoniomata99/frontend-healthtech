import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { roomsTitles } from '../../utils/tableHeaders'
import { URL_ROOMS } from '../../utils/constants'
import { AiOutlineClose } from 'react-icons/ai'
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
  const { getData, postData, updateData, deleteData, error, message } = useAxios()
  const [consultingRooms, setConsultingRooms] = useState([])
  const [consultingRoom, setConsultingRoom] = useState({
    id_consultorio: 0,
    nombre: '',
    codigo: '',
    piso: '',
    estado: '',
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_ROOMS)
      setConsultingRooms(data)
    })()
  }, [])

  const toggleModal = (data) => {
    handleModal()
    setConsultingRoom({
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
            {consultingRooms?.map((item) => (
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
            id={consultingRoom.id_consultorio}
            itemName={consultingRoom.nombre}
            itemCode={consultingRoom.codigo}
            itemFloor={consultingRoom.piso}
            itemState={consultingRoom.estado}
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
