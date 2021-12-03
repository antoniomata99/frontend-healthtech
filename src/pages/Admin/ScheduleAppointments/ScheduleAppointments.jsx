import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useAxios } from '../../../hooks/useAxios'
import { useModal } from '../../../hooks/useModal'
import { URL_APPOINTMENT_SCHEDULE } from '../../../utils/constants'
import { scheduleTitles } from '../../../utils/tableHeaders'
import { ScheduleForm } from '../../../forms'
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
} from '../../../components'
import { AdminLayout } from '../../../layouts'

const ScheduleAppointments = () => {
  const { openModal, handleModal } = useModal()
  const {
    getData,
    postData,
    updateData,
    deleteData,
    isUpdate,
    setIsUpdate,
    message,
    setMessage,
    error,
  } = useAxios()
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
      setIsUpdate(false)
    })()
  }, [isUpdate])

  const toggleModal = (data) => {
    handleModal()
    setScheduleAppointment({
      id_horario: data.id_horario,
      hora_inicio: data.hora_inicio,
      hora_fin: data.hora_fin,
    })
  }

  const handleDelete = (id) => {
    deleteData(id, URL_APPOINTMENT_SCHEDULE)
  }

  return (
    <AdminLayout>
      {error && (
        <Message modifier='error' text={`Error: ${message}`} state={true} setMessage={setMessage} />
      )}
      {!error && message.length > 3 && (
        <Message
          modifier='good'
          text={`Success: ${message}`}
          state={true}
          setMessage={setMessage}
        />
      )}
      <Container button={true} linkText='/admin/doctor' title='Schedule appointments'>
        <ScheduleForm postData={postData} update={false} url={URL_APPOINTMENT_SCHEDULE} />
        <Table>
          <TableHeader titles={scheduleTitles} />
          <TableContent>
            {scheduleAppointments?.map((item) => (
              <TableItem
                key={`ScheduleAppointment--${item.id_horario}`}
                handleEdit={toggleModal}
                handleDelete={handleDelete}
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
            url={URL_APPOINTMENT_SCHEDULE}
          />
        </Modal>
      )}
    </AdminLayout>
  )
}

export { ScheduleAppointments }
