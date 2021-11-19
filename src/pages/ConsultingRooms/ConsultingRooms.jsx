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
  const { data: rooms, getData } = useAxios('consultorio/')
  const { openModal, handleModal } = useModal()

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Container>
        <ConsultingRoomsForm />
        <Table>
          <TableHeader titles={titles} />
          <TableContent>
            {rooms.map((item) => (
              <TableItem key={`room--${item.id_consultorio}`} handleModal={handleModal}>
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
          <ConsultingRoomsForm />
        </Modal>
      )}
    </>
  )
}

ConsultingRooms.defaultProps = {}

ConsultingRooms.propTypes = {}

export { ConsultingRooms }
