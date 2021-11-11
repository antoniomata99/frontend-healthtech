import React from 'react'
import { useSchedule } from '../../hooks/useSchedule'
import PropTypes from 'prop-types'
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
  ScheduleForm,
} from '../../components'

// TODO: Need info from the API
const titles = ['ID', 'Start time', 'End time']

const Schedule = () => {
  const { openModal, handleModal, data: schedules } = useSchedule('horarioMedico/')

  return (
    <>
      <Container button='true' linkText='/doctor'>
        <ScheduleForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {schedules.map((item) => (
              <TableItem key={`schedule--${item.id_horario_medico}`} handleModal={handleModal}>
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
          <ScheduleForm />
        </Modal>
      )}
    </>
  )
}

Schedule.defaultProps = {}

Schedule.propTypes = {}

export { Schedule }
