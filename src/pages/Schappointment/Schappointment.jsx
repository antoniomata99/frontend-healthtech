import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useModal } from '../../hooks/useModal'
import { URL_APPOINTMENT_SCHEDULE } from '../../utils/constants'
import { scheduleTitles } from '../../utils/tableHeaders'
import { AiOutlineClose } from 'react-icons/ai'
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableItem,
  TableData,
  Modal,
  Button,
  ScheduleForm,
} from '../../components'

const Schappointment = () => {
  const { openModal, handleModal } = useModal()
  const { getData, postData, updateData, deleteData } = useAxios()
  const [scheduleAppointments, setScheduleAppointments] = useState([])
  const [scheduleAppointment, setScheduleAppointment] = useState({
    id_horario: 0,
    hora_inicio: '',
    hora_fin: '',
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_APPOINTMENT_SCHEDULE)
      setScheduleAppointments(data)
    })()
  }, [])

  const toggleModal = (data) => {
    handleModal()
    setScheduleAppointment({
      id_horario: data.id_horario,
      hora_inicio: data.hora_inicio,
      hora_fin: data.hora_fin,
    })
  }

  return (
    <>
      <Container button={true} linkText='/doctor'>
        <ScheduleForm postData={postData} update={false} />
        <Table>
          <TableHeader titles={scheduleTitles} />
          <TableContent>
            {scheduleAppointments?.map((item) => (
              <TableItem
                key={`Schappointment--${item.id_horario}`}
                handleEdit={toggleModal}
                handleDelete={deleteData}
                data={item}
                id={item.id_horario}
              >
                <TableData data={item.id_horario} />
                <TableData data={item.hora_inicio} />
                <TableData data={item.hora_fin} />
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
          <ScheduleForm
            updateData={updateData}
            id={scheduleAppointment.id_horario}
            initialTime={scheduleAppointment.hora_inicio}
            finishTime={scheduleAppointment.hora_fin}
            handleModal={handleModal}
            update={true}
          />
        </Modal>
      )}
    </>
  )
}

export { Schappointment }
