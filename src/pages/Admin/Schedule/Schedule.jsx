import React, { useEffect, useState } from 'react'
import { useAxios } from '@hooks/useAxios'
import { useModal } from '@hooks/useModal'
import { scheduleTitles } from '@utils/tableHeaders'
import { URL_DOCTOR_SCHEDULE } from '@utils/constants'
import { AiOutlineClose } from 'react-icons/ai'
import { ScheduleForm } from '@forms'
import { AdminLayout } from '@layouts'
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
} from '@components'

const Schedule = () => {
  const { handleModal, openModal } = useModal()
  const { getData, postData, updateData, deleteData, error, message } = useAxios()
  const [schedules, setSchedules] = useState([])
  const [schedule, setSchedule] = useState({
    id_horario_medico: 0,
    hora_inicio: '',
    hora_fin: '',
  })

  useEffect(() => {
    ;(async () => {
      const data = await getData(URL_DOCTOR_SCHEDULE)
      setSchedules(data)
    })()
  }, [])

  const toggleModal = (data) => {
    handleModal()
    setSchedule({
      id_horario_medico: data.id_horario_medico,
      hora_inicio: data.hora_inicio,
      hora_fin: data.hora_fin,
    })
  }

  // TODO: Add loading state render

  return (
    <AdminLayout>
      {error && <Message modifier='error' text={`Error: ${message}`} state={true} />}
      {!error && message.length > 3 && (
        <Message modifier='good' text={`Success: ${message}`} state={true} />
      )}
      <Container button={true} linkText='/admin/doctor'>
        <ScheduleForm postData={postData} update={false} />
        <Table>
          <TableHeader titles={scheduleTitles} />
          <TableContent>
            {schedules?.map((item) => (
              <TableItem
                key={`schedule--${item.id_horario_medico}`}
                handleEdit={toggleModal}
                data={item}
                remove={false}
              >
                <TableData data={item.id_horario_medico} />
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
            id={schedule.id_horario_medico}
            initialTime={schedule.hora_inicio}
            finishTime={schedule.hora_fin}
            handleModal={handleModal}
            update={true}
          />
        </Modal>
      )}
    </AdminLayout>
  )
}

export { Schedule }
